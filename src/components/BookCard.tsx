import { Book } from '../types/book';
import { Heart, Info } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onViewDetails: (book: Book) => void;
}

export default function BookCard({ book, onViewDetails }: BookCardProps) {
  const { volumeInfo } = book;
  const coverUrl = volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=240';

  return (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden transition-transform 
                    hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={coverUrl}
          alt={volumeInfo.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 w-full p-4 space-y-2">
        <h3 className="text-lg font-bold text-white line-clamp-2">{volumeInfo.title}</h3>
        {volumeInfo.authors && (
          <p className="text-sm text-gray-300">{volumeInfo.authors.join(', ')}</p>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => onViewDetails(book)}
            className="flex items-center space-x-1 px-3 py-1 bg-orange-500 rounded-lg 
                       hover:bg-orange-600 transition-colors text-white text-sm"
          >
            <Info className="w-4 h-4" />
            <span>Details</span>
          </button>
          
          <button className="p-2 text-gray-300 hover:text-orange-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}