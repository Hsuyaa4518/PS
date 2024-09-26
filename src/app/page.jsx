export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to E-Library</h1>
        <p className="text-xl mb-8">Your digital library management system</p>
        
        <div className="mt-10 space-x-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 font-semibold transition">
            <a href="/register">Browse Books</a>
          </button>
          <button className="bg-white text-purple-500 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 font-semibold transition">
            <a href="/admin">Manage Library</a>
          </button>
        </div>
      </div>

      <div className="mt-20 w-full flex justify-center items-center">
        <img
          src="/images/library-hero.svg"
          alt="Library Illustration"
          className="w-2/3 max-w-lg"
        />
      </div>

      <footer className="absolute bottom-0 text-center py-4 w-full bg-opacity-20 bg-white">
        <p className="text-sm">Powered by E-Library &copy; 2024</p>
      </footer>
    </main>
  );
}
