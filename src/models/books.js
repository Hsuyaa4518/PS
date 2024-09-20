// src/models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  publishedDate: {
    type: Date,
  },
  isbn: {
    type: String,
    unique: true,
  },
});

export default mongoose.models.Book || mongoose.model('Book', bookSchema);
