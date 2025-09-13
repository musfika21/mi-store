"use server"
import bcrypt from "bcrypt";
import dbConnect, { collectionsNameObj } from "@/lib/dbConnect"

export const RegisterUser = async (payload) => {
    //   console.log("Register Payload:", payload)
    const usersCollection = dbConnect(collectionsNameObj.userCollection);

    // validation if user already exists
    const user = await usersCollection.findOne({ email: payload.email });
    if (!user) {
        const hashedPass = await bcrypt.hash(payload.password, 10);
        payload.password = hashedPass;
        const result = await usersCollection.insertOne(payload);
        const { acknowledged, insertedId } = payload;
        return { acknowledged, insertedId };
    } else {
        return { status: 403, message: "user already exist" }
    }


}
