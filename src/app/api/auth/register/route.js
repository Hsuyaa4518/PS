// src/app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import User from '../../../models/User';

export async function POST(request) {
  await dbConnect();

  const { username, email, password } = await request.json();

  try {
    const user = new User({ username, email, password });
    await user.save();
    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}