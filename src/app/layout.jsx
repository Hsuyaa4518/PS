// src/app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Library',
  description: 'Your digital library management system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/books" className="text-white">Books</a></li>
            <li><a href="/login" className="text-white">Login</a></li>
            <li><a href="/register" className="text-white">Register</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}