<<<<<<< HEAD
import { Search } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useLocation, useSearchParams } from 'react-router-dom';
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
<<<<<<< HEAD
}

export default function SearchBar({ 
  value, 
  onChange, 
  onSearch, 
  placeholder = "Search for books, authors, or genres..." 
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && value?.trim()) {
=======
  autoFocus?: boolean;
}

export default function SearchBar({
  value: controlledValue,
  onChange: onControlledChange,
  onSearch,
  placeholder = "Search books...",
  autoFocus = false
}: SearchBarProps) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [uncontrolledValue, setUncontrolledValue] = useState('');

  // Determine which value to use (controlled or uncontrolled)
  const value = controlledValue ?? uncontrolledValue;
  const onChange = onControlledChange ?? setUncontrolledValue;

  // Initialize search from URL on component mount
  useEffect(() => {
    const queryParam = searchParams.get('q') || searchParams.get('genre') || '';
    if (queryParam && location.pathname === '/search') {
      onChange(queryParam);
    }
  }, [location.pathname, searchParams]);

  const handleSearch = () => {
    if (value.trim() && onSearch) {
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
      onSearch(value.trim());
    }
  };

<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity -z-1" />
        <div className="relative flex items-center">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-4 text-lg bg-black/50 border-2 border-orange-500/30 rounded-xl 
                     text-white placeholder-gray-400 outline-none focus:border-orange-500
                     transition-all duration-300 backdrop-blur-sm ring-0 focus:ring-0
                     focus:bg-black/70"
          />
          {onSearch && (
            <button
              type="submit"
              className="absolute right-2 p-3 bg-gradient-to-r from-orange-500 to-orange-600 
                       rounded-lg hover:from-orange-600 hover:to-orange-700 
                       transform hover:scale-105 transition-all duration-300
                       shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </div>
    </form>
=======
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    onChange('');
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center bg-gradient-to-r from-custom-black-100/80 via-custom-black-50/60 to-custom-black-100/80 
        rounded-2xl overflow-hidden transition-all border border-white/5">
        <Search className="w-5 h-5 text-gray-400 ml-4" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full bg-transparent text-white placeholder-gray-400 px-4 py-3 focus:outline-none"
        />
        {value && (
          <button 
            onClick={clearSearch}
            className="p-2 hover:text-white text-gray-400 focus:outline-none transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        <button 
          onClick={handleSearch}
          className="bg-gradient-to-r from-custom-orange-100 to-custom-orange-200 
            hover:from-custom-orange-50 hover:via-custom-orange-100 hover:to-custom-orange-200 
            text-custom-black-DEFAULT px-6 py-3 font-medium transition-all duration-300 
            focus:outline-none hover:shadow-lg hover:shadow-custom-orange-50/20"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </div>
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
  );
}