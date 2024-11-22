import { useEffect, useState } from 'react';
import { Book } from '../types/book';
import { searchBooks } from '../lib/api';
import BookCard from '../components/BookCard';
import BookDetails from '../components/BookDetails';
import SearchBar from '../components/SearchBar';

export default function Collection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchBooks('subject:fiction').then((data) => {
      setBooks(data.items || []);
      setLoading(false);
    });
  }, []);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const data = await searchBooks(query);
    setBooks(data.items || []);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Vast Collection
        </h1>
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onViewDetails={() => setSelectedBook(book)}
              />
            ))}
          </div>
        )}
      </div>
      
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}