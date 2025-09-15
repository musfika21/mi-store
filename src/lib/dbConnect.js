// lib/dbConnect.js
import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionsNameObj = {
    flowerCollection: "all_flowers",
    userCollection: "all_users"
};

let client;
let clientPromise;

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

if (!uri || !dbName) {
    throw new Error("Please define MONGO_URI and DB_NAME environment variables.");
}

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        global._mongoClientPromise = client.connect().catch(err => {
            console.error("MongoDB connection failed:", err);
            throw err;
        });
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });
    clientPromise = client.connect().catch(err => {
        console.error("MongoDB connection failed:", err);
        throw err;
    });
}

export async function dbConnect(collectionName) {
    const client = await clientPromise;
    return client.db(dbName).collection(collectionName);
}