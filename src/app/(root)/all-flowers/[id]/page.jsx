import dbConnect, { collectionsNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function FlowerDetailsPage({ params }) {
    const p = await params;
    const flowerCollection = dbConnect(collectionsNameObj.flowerCollection);
    const data = await flowerCollection.findOne({_id: new ObjectId(p.id)})
    return (
        <div>
            Details
            <p>{JSON.stringify(p)}</p>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}
