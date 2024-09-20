// src/app/api/books/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Book from '../../../models/books';

export async function GET() {
  await dbConnect();
  const books = await Book.find();
  return NextResponse.json(books);
}

export async function POST(request) {
  await dbConnect();
  const { title, author, description, publishedDate, isbn } = await request.json();

  try {
    const book = new Book({ title, author, description, publishedDate, isbn });
    await book.save();
    return NextResponse.json({ message: 'Book added successfully' });
  } catch (error) {
    console.error('Error adding book:', error);
    return NextResponse.json({ error: 'Failed to add book' }, { status: 500 });
  }
}

// Add PUT and DELETE methods as needed
