// src/app/admin/page.js
'use client';
import { useState, useEffect } from 'react';

export default function Admin() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [isbn, setIsbn] = useState('');

  const fetchBooks = async () => {
    const response = await fetch('/api/books');
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, description, publishedDate, isbn }),
    });
    if (response.ok) {
      fetchBooks(); // Refresh book list
      setTitle('');
      setAuthor('');
      setDescription('');
      setPublishedDate('');
      setIsbn('');
    } else {
      alert('Failed to add book');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
        <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        <button type="submit" className="bg-green-500 text-white">Add Book</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}
