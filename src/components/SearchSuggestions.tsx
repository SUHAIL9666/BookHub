import React from 'react';
import { Book } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage?: string;
}

interface SearchSuggestionsProps {
  suggestions: Book[];
  onSelectSuggestion: (book: Book) => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ 
  suggestions, 
  onSelectSuggestion 
}) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="absolute z-50 w-full bg-black/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 mt-2 max-h-96 overflow-y-auto">
      {suggestions.map((book) => (
        <div 
          key={book.id}
          onClick={() => onSelectSuggestion(book)}
          className="flex items-center p-3 hover:bg-white/10 cursor-pointer transition-colors group"
        >
          {book.coverImage ? (
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-12 h-16 object-cover rounded mr-4 group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-12 h-16 bg-white/10 flex items-center justify-center rounded mr-4">
              <Book className="w-6 h-6 text-white/50" />
            </div>
          )}
          
          <div>
            <h3 className="text-white font-semibold line-clamp-1 group-hover:text-orange-500 transition-colors">
              {book.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-1">
              {book.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
