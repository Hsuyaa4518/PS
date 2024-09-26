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
    <div className="min-h-screen flex flex-col items-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-extrabold mb-8">Admin Panel</h1>

      {/* Book Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-lg p-8 shadow-lg mb-10 text-black">
        <h2 className="text-2xl font-bold mb-6">Add a New Book</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Add Book
          </button>
        </div>
      </form>

      {/* Books List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.isbn}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition text-black"
          >
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-lg mb-1">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-sm mb-1">
              <strong>Published Date:</strong> {book.publishedDate}
            </p>
            <p className="text-sm mb-2">
              <strong>ISBN:</strong> {book.isbn}
            </p>
            <p className="text-sm">
              <strong>Description:</strong> {book.description || 'No description available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
