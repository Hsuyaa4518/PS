// src/app/api/books/[id]/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db';
import Book from '../../../models/books';

export async function GET(request, { params }) {
  await dbConnect();

  try {
    const book = await Book.findById(params.id);
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }
    return NextResponse.json(book);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch book' }, { status: 500 });
  }
}