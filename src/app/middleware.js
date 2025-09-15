// middleware.js
import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export async function middleware(request) {
    const token = request.headers.get('authorization')?.split('Bearer ')[1] || request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};