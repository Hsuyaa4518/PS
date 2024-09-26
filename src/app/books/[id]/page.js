async function getBook(id) {
  const res = await fetch(`http://localhost:3000/api/books/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch book');
  }
  return res.json();
}

export default async function BookDetails({ params }) {
  const book = await getBook(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white text-black rounded-lg p-6 shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <p className="mb-2"><strong>Author:</strong> {book.author}</p>
        <p className="mb-2"><strong>Description:</strong> {book.description}</p>
        <p className="mb-2"><strong>Published Year:</strong> {book.publishedYear}</p>
        <p className="mb-2"><strong>ISBN:</strong> {book.isbn}</p>
        {book.coverImage && <img src={book.coverImage} alt={book.title} className="mt-4 max-w-md" />}
      </div>
      <footer className="absolute bottom-0 text-center py-4 w-full bg-opacity-20 bg-white">
        <p className="text-sm">Powered by E-Library &copy; 2024</p>
      </footer>
    </main>
  );
}
