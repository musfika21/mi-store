"use server"

import { collectionsNameObj, dbConnect } from "@/lib/dbConnect";

// GET all flowers
export async function GET() {
  try {
    const flowers = await dbConnect(collectionsNameObj.flowerCollection)
      .find()
      .toArray();

    return Response.json(flowers, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// POST a new flower
export async function POST(req) {
  try {
    const postedFlower = await req.json();
    const result = await dbConnect(collectionsNameObj.flowerCollection)
      .insertOne(postedFlower);

    return Response.json(result, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
