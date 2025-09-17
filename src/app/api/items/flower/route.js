import { NextResponse } from 'next/server';
import { dbConnect, collectionsNameObj } from "@/lib/dbConnect";

// GET all flowers or filtered flowers
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const color = searchParams.get('color');
    const name = searchParams.get('name');
    const limit = parseInt(searchParams.get('limit')) || 20;
    const skip = parseInt(searchParams.get('skip')) || 0;

    // Build query object
    const query = {};
    if (category) query.category = category;
    if (color) query.color = color;
    if (name) query.name = { $regex: name, $options: 'i' };

    console.log('GET query:', { query, limit, skip });

    const collection = await dbConnect(collectionsNameObj.flowerCollection);
    if (!collection) {
      throw new Error('Failed to get collection from dbConnect');
    }

    console.log('Connected to collection:', collectionsNameObj.flowerCollection);

    const flowers = await collection
      .find(query)
      .limit(limit)
      .skip(skip)
      .toArray();

    console.log('Fetched flowers:', flowers.length);

    return NextResponse.json(
      {
        flowers,
        total: await collection.countDocuments(query),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('GET error:', error.stack);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new flower
export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Received body:', JSON.stringify(body, null, 2)); // Pretty-print body

    // Required fields check
    if (!body.name || !body.pricePerPiece || !body.availableAmount) {
      return NextResponse.json(
        { error: "Missing required fields: name, pricePerPiece, availableAmount" },
        { status: 400 }
      );
    }

    // Sanitize data
    const sanitizedBody = {
      ...body,
      pricePerPiece: parseFloat(body.pricePerPiece),
      availableAmount: parseInt(body.availableAmount, 10),
      minimumPurchase: body.minimumPurchase ? parseInt(body.minimumPurchase, 10) : 1,
      discountPercentage: body.discountPercentage ? parseFloat(body.discountPercentage) : 0,
      image: body.image || null,
    };

    // Validate numbers and image size
    if (isNaN(sanitizedBody.pricePerPiece) || isNaN(sanitizedBody.availableAmount) || isNaN(sanitizedBody.minimumPurchase)) {
      return NextResponse.json({ error: "Numeric fields must be valid numbers" }, { status: 400 });
    }
    if (sanitizedBody.image && typeof sanitizedBody.image === 'string' && sanitizedBody.image.length > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "Image data too large (max 10MB)" }, { status: 400 });
    }

    console.log('Sanitized body:', JSON.stringify(sanitizedBody, null, 2));
    console.log('Collection name:', collectionsNameObj.flowerCollection);

    // Connect to DB
    const collection = await dbConnect(collectionsNameObj.flowerCollection);
    if (!collection) {
      throw new Error('Failed to get collection from dbConnect');
    }
    console.log('Connected to collection:', collectionsNameObj.flowerCollection);

    // Insert document
    console.log('Inserting document...');
    const result = await collection.insertOne(sanitizedBody);
    console.log('Insert result:', result);

    return NextResponse.json(
      { message: "Flower added successfully", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST error:', error.stack); // Full stack trace
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}