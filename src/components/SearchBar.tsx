import { Search } from 'lucide-react';

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
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
      onSearch(value.trim());
    }
  };

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
  );
}