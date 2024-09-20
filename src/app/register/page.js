// src/app/register/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      router.push('/login');
    } else {
      alert('Registration failed');
    }
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
    <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Create an Account</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg font-semibold hover:from-green-500 hover:to-green-700 shadow-md transition duration-300">
        Register
      </button>
    </form>
    <p className="text-center text-sm text-gray-600 mt-6">
      Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign In</a>
    </p>
  </div>
</div>

  );
}