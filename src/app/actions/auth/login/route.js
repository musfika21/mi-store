// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { dbConnect, collectionsNameObj } from '@/lib/dbConnect';
import { generateToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

export async function POST(request) {
    try {
        const { email, password } = await request.json();
        if (!email || !password) {
            return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
        }

        const usersCollection = await dbConnect(collectionsNameObj.userCollection);
        const user = await usersCollection.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
        }

        const token = generateToken({ id: user._id, email: user.email, firstName: user.firstName });
        cookies().set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600, // 1 hour
            path: '/',
        });

        return NextResponse.json({
            message: 'Login successful',
            token,
            user: { id: user._id, firstName: user.firstName, email: user.email, profilePhoto: user.profilePhoto || null },
        }, { status: 200 });
    } catch (error) {
        console.error('Login error:', error.message);
        return NextResponse.json({ message: `Internal server error: ${error.message}` }, { status: 500 });
    }
}