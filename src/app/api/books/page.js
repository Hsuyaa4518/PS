// src/app/books/page.js
import Link from 'next/link';

async function getBooks() {
  const res = await fetch('http://localhost:3000/api/books', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  return res.json();
}

export default async function Books() {
  const books = await getBooks();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id} className="mb-2">
            <Link href={`/books/${book._id}`} className="text-blue-500 hover:underline">
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}