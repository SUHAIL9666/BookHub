import { useState } from 'react';
import { Book } from '../types/book';
import BookCard from '../components/BookCard';
import BookDetails from '../components/BookDetails';
import { BookmarkPlus } from 'lucide-react';

export default function Library() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="min-h-screen bg-black pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          My Library
        </h1>

        <div className="grid gap-6">
          <div className="p-8 rounded-xl bg-gray-900/50 border-2 border-dashed border-orange-500/30 text-center">
            <BookmarkPlus className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Create Your First Bookshelf</h3>
            <p className="text-gray-400 mb-4">
              Start organizing your books by creating custom bookshelves
            </p>
            <button className="px-6 py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Create Bookshelf
            </button>
          </div>
        </div>
      </div>
      
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}