// src/app/books/[id]/page.js
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
        <p className="mb-2"><strong>Author:</strong> {book.author}</p>
        <p className="mb-2"><strong>Description:</strong> {book.description}</p>
        <p className="mb-2"><strong>Published Year:</strong> {book.publishedYear}</p>
        <p className="mb-2"><strong>ISBN:</strong> {book.isbn}</p>
        {book.coverImage && <img src={book.coverImage} alt={book.title} className="mt-4 max-w-md" />}
      </div>
    );
  }