import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
<<<<<<< HEAD
import { useSearchParams } from 'react-router-dom';
import { Book } from '../types/book';
import { searchBooks, searchBooksByGenre } from '../lib/api';
import BookCard from '../components/BookCard';
import BookDetails from '../components/BookDetails';
import SearchBar from '../components/SearchBar';
import { BookSearch } from 'lucide-react';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
=======
import { Book } from '../types/book';
import { searchBooks } from '../lib/api';
import BookCard from '../components/BookCard';
import BookDetails from '../components/BookDetails';
import SearchBar from '../components/SearchBar';

export default function Search() {
  const [query, setQuery] = useState('');
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery] = useDebounce(query, 300);

<<<<<<< HEAD
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    setSearchParams(newQuery ? { q: newQuery } : {});
  };

  useEffect(() => {
    async function performSearch() {
      if (!debouncedQuery.trim()) {
        setBooks([]);
        return;
      }

      setLoading(true);
      try {
        let response;
        const genre = searchParams.get('genre');
        
        if (genre) {
          response = await searchBooksByGenre(genre);
          // Update the page title to reflect genre search
          document.title = `${genre} Books - BookHub`;
        } else {
          response = await searchBooks(debouncedQuery);
          document.title = `Search Results - BookHub`;
        }
        
        setBooks(response.items || []);
      } catch (error) {
        console.error('Search error:', error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    performSearch();
  }, [debouncedQuery, searchParams]);

  // Get the current genre from URL params
  const currentGenre = searchParams.get('genre');
  
  // Customize the header text based on whether we're showing genre results
  const headerText = currentGenre 
    ? `${currentGenre} Books`
    : 'Search Books';

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="flex items-center justify-center mb-8">
            <BookSearch className="w-12 h-12 text-orange-500 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              {headerText}
            </h1>
          </div>
          
          {!currentGenre && (
            <div className="max-w-3xl mx-auto mb-12 transform hover:scale-102 transition-transform duration-300">
              <SearchBar 
                value={query}
                onChange={handleQueryChange}
                placeholder="Start typing to search books..."
              />
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-orange-500/20" />
                <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin" />
              </div>
            </div>
          ) : books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
              {books.map((book) => (
                <div key={book.id} className="h-full">
                  <BookCard
                    book={book}
                    onViewDetails={() => setSelectedBook(book)}
                  />
                </div>
              ))}
            </div>
          ) : query && !loading ? (
            <div className="text-center py-20">
              <div className="inline-block p-6 rounded-2xl bg-white/5 border border-orange-500/20 backdrop-blur-sm">
                <p className="text-xl text-gray-400">
                  No books found {currentGenre 
                    ? `in ${currentGenre}`
                    : `for "${query}"`
                  }
                </p>
                <p className="mt-2 text-gray-500">
                  Try adjusting your search terms or browse our categories
                </p>
              </div>
            </div>
          ) : !currentGenre && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">
                Type something to start searching...
              </p>
            </div>
          )}
        </div>
=======
  useEffect(() => {
    if (debouncedQuery.trim()) {
      setLoading(true);
      searchBooks(debouncedQuery).then((data) => {
        setBooks(data.items || []);
        setLoading(false);
      });
    } else {
      setBooks([]);
    }
  }, [debouncedQuery]);

  return (
    <div className="min-h-screen bg-black pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Search Books
        </h1>
        
        <div className="mb-8">
          <SearchBar 
            value={query}
            onChange={setQuery}
            placeholder="Start typing to search books..."
          />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onViewDetails={() => setSelectedBook(book)}
              />
            ))}
          </div>
        ) : query && !loading ? (
          <div className="text-center py-12 text-gray-400">
            No books found for "{query}"
          </div>
        ) : null}
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
      </div>

      {selectedBook && (
        <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}