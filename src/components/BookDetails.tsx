import { X, Star, ExternalLink, BookOpen } from 'lucide-react';
import { Book } from '../types/book';

interface BookDetailsProps {
  book: Book;
  onClose: () => void;
}

export default function BookDetails({ book, onClose }: BookDetailsProps) {
  const { volumeInfo, saleInfo } = book;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold">{volumeInfo.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <img
                src={volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=240'}
                alt={volumeInfo.title}
                className="w-full rounded-lg shadow-xl"
              />
              
              <div className="mt-4 space-y-2">
                {volumeInfo.averageRating && (
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span>{volumeInfo.averageRating}/5</span>
                    {volumeInfo.ratingsCount && (
                      <span className="text-gray-400">({volumeInfo.ratingsCount} ratings)</span>
                    )}
                  </div>
                )}
                
                {saleInfo?.buyLink && (
                  <a
                    href={saleInfo.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-orange-500 rounded-lg 
                             hover:bg-orange-600 transition-colors text-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buy Now</span>
                  </a>
                )}
                
                <button className="w-full flex items-center space-x-2 px-4 py-2 border-2 
                                 border-orange-500/50 rounded-lg hover:bg-orange-500/10 
                                 transition-colors justify-center">
                  <BookOpen className="w-4 h-4" />
                  <span>Add to Library</span>
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-4">
              {volumeInfo.authors && (
                <p className="text-lg text-gray-300">
                  by {volumeInfo.authors.join(', ')}
                </p>
              )}
              
              {volumeInfo.description && (
                <div className="prose prose-invert max-w-none">
                  <p>{volumeInfo.description}</p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                {volumeInfo.publisher && (
                  <div>
                    <span className="text-gray-400">Publisher:</span>
                    <p>{volumeInfo.publisher}</p>
                  </div>
                )}
                
                {volumeInfo.publishedDate && (
                  <div>
                    <span className="text-gray-400">Published:</span>
                    <p>{volumeInfo.publishedDate}</p>
                  </div>
                )}
                
                {volumeInfo.pageCount && (
                  <div>
                    <span className="text-gray-400">Pages:</span>
                    <p>{volumeInfo.pageCount}</p>
                  </div>
                )}
                
                {volumeInfo.categories && (
                  <div>
                    <span className="text-gray-400">Categories:</span>
                    <p>{volumeInfo.categories.join(', ')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}