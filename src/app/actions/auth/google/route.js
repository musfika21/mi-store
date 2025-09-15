// app/api/auth/google/route.js
import { NextResponse } from 'next/server';
import { dbConnect, collectionsNameObj } from '@/lib/dbConnect';
import { generateToken } from '@/lib/jwt';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function POST(request) {
    try {
        const { token } = await request.json();
        if (!token) {
            return NextResponse.json({ message: 'No token provided' }, { status: 400 });
        }

        // Verify Google token
        const googleResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${token}` },
        });

        const { email, given_name, picture } = googleResponse.data;
        if (!email) {
            return NextResponse.json({ message: 'Invalid Google token' }, { status: 401 });
        }

        const usersCollection = await dbConnect(collectionsNameObj.userCollection);
        let user = await usersCollection.findOne({ email });

        if (!user) {
            // Create new user
            const newUser = {
                firstName: given_name || 'Google User',
                email,
                profilePhoto: picture || 'https://via.placeholder.com/40',
                createdAt: new Date(),
                // No password for Google users
            };
            const result = await usersCollection.insertOne(newUser);
            user = { _id: result.insertedId, ...newUser };
        }

        const jwtToken = generateToken({ id: user._id, email: user.email, firstName: user.firstName });
        cookies().set('token', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600,
            path: '/',
        });

        return NextResponse.json({
            message: 'Google Sign-In successful',
            token: jwtToken,
            user: {
                id: user._id,
                firstName: user.firstName,
                email: user.email,
                profilePhoto: user.profilePhoto || null,
            },
        }, { status: 200 });
    } catch (error) {
        console.error('Google Sign-In error:', error.message);
        return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
    }
}