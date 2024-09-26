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
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Books</h1>
        <p className="text-xl mb-8">Explore our collection of digital books</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book._id} className="bg-white text-black rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
            <p className="text-gray-600 mb-2"><strong>Published Date:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4"><strong>Description:</strong> {book.description}</p>
            <Link href={`/books/${book._id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <footer className="absolute bottom-0 text-center py-4 w-full bg-opacity-20 bg-white">
        <p className="text-sm">Powered by E-Library &copy; 2024</p>
      </footer>
    </main>
  );
}
