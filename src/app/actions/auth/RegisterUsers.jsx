// app/actions/auth/RegisterUser.js
"use server";
import bcrypt from 'bcrypt';
import { dbConnect, collectionsNameObj } from '@/lib/dbConnect';
import { generateToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

export const RegisterUser = async (payload) => {
    try {
        const usersCollection = await dbConnect(collectionsNameObj.userCollection);

        // Check if user already exists
        const existingUser = await usersCollection.findOne({ email: payload.email });
        if (existingUser) {
            return { status: 409, message: 'User already exists' };
        }

        // Hash password
        const hashedPass = await bcrypt.hash(payload.password, 10);
        const newUser = {
            firstName: payload.firstName,
            lastName: payload.lastName || '',
            email: payload.email,
            password: hashedPass,
            createdAt: new Date(),
        };

        // Insert user
        const result = await usersCollection.insertOne(newUser);

        // Generate JWT
        const token = generateToken({ ...newUser, _id: result.insertedId });

        // Set token in cookies
        cookies().set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600, // 1 hour
            path: '/',
        });

        return {
            status: 201,
            message: 'User registered successfully',
            token,
            user: { id: result.insertedId, firstName: newUser.firstName, email: newUser.email },
        };
    } catch (error) {
        console.error('Registration error:', error);
        return { status: 500, message: `Internal server error: ${error.message}` };
    }
};