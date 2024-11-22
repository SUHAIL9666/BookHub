import { BookOpen, TrendingUp, Library, BookMarked, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(auth.currentUser);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleGenreClick = (genre: string) => {
    navigate(`/search?genre=${encodeURIComponent(genre)}`);
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Vast Collection',
      description: 'Access millions of books from the Google Books library',
      path: '/search',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Trending Books',
      description: 'Discover what\'s popular in the reading community',
      path: '/trending',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Library,
      title: 'Personal Library',
      description: 'Create and organize your own digital bookshelves',
      path: user ? '/library' : '/login',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const popularCategories = [
    'Fiction', 'Non-Fiction', 'Mystery', 'Science Fiction',
    'Romance', 'Biography', 'History', 'Self-Help'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,69,0,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center space-y-8 relative">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
                  Your Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Book Paradise
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Explore millions of books, create your personal library, and join a community of passionate readers.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto transform hover:scale-102 transition-transform duration-300">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                onSearch={handleSearch}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {popularCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleGenreClick(category)}
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-orange-500/20 
                           backdrop-blur-sm transition-all duration-300 text-sm hover:border-orange-500/40
                           hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, path, color }) => (
            <Link
              key={title}
              to={path}
              className="group p-6 rounded-2xl bg-white/5 border border-orange-500/20 
                       backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300
                       hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} p-4 mb-6
                            transform group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <div className="flex items-center text-orange-500 group-hover:text-orange-400">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.1),transparent_50%)]" />
          
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <BookMarked className="w-16 h-16 text-orange-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Start Your Reading Journey Today
              </span>
            </h2>
            
            {!user && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/login"
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold 
                           hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all
                           shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
                >
                  Sign Up Now
                </Link>
                <Link 
                  to="/search"
                  className="px-8 py-3 bg-white/5 border border-orange-500/40 rounded-xl font-semibold 
                           hover:bg-white/10 transform hover:scale-105 transition-all"
                >
                  Browse Books
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}