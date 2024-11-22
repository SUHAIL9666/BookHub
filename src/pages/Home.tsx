<<<<<<< HEAD
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
=======
import { BookOpen, TrendingUp, Library, ChevronRight, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleGenreSearch = (genre: string) => {
    setSearchQuery(genre);
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
    navigate(`/search?genre=${encodeURIComponent(genre)}`);
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Vast Collection',
      description: 'Access millions of books from the Google Books library',
<<<<<<< HEAD
      path: '/search',
      color: 'from-orange-500 to-red-500'
=======
      path: '/collection',
      iconColor: 'text-custom-orange-50',
      textColor: 'text-white'
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
    },
    {
      icon: TrendingUp,
      title: 'Trending Books',
      description: 'Discover what\'s popular in the reading community',
      path: '/trending',
<<<<<<< HEAD
      color: 'from-blue-500 to-purple-500'
=======
      iconColor: 'text-purple-500',
      textColor: 'text-white'
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
    },
    {
      icon: Library,
      title: 'Personal Library',
      description: 'Create and organize your own digital bookshelves',
<<<<<<< HEAD
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
=======
      path: '/library',
      iconColor: 'text-green-500',
      textColor: 'text-white'
    }
  ];

  const genres = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 
    'Mystery', 'Romance', 'Thriller', 'Historical', 
    'Biography', 'Self-Help', 'Science', 'Poetry'
  ];

  return (
    <div className="min-h-screen bg-custom-black-DEFAULT relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-black-50/30 via-custom-black-DEFAULT to-custom-black-DEFAULT opacity-90 z-0"></div>
      
      {/* Subtle Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-custom-orange-50/10 to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-radial from-purple-500/10 to-transparent opacity-20 blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight pt-16">
            <span className="bg-gradient-to-r from-custom-orange-50 via-custom-orange-100 to-custom-orange-200 bg-clip-text text-transparent">
              Discover Your Next Great Read
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your personal gateway to millions of books. Create your library, track your reading journey, and discover new favorites.
          </p>

          {/* Search Container */}
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search books, authors, or genres..."
            />

            {/* Genre Quick Search */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreSearch(genre)}
                  className="px-3 py-1 text-sm bg-custom-black-100 hover:bg-custom-orange-50 
                    text-white hover:text-custom-black-DEFAULT rounded-full transition-colors"
                >
                  {genre}
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
                </button>
              ))}
            </div>
          </div>
        </div>
<<<<<<< HEAD
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
=======

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map(({ icon: Icon, title, description, path, iconColor }) => (
            <Link
              key={path}
              to={path}
              className="group p-6 rounded-xl 
                bg-custom-black-100/40 
                hover:bg-custom-black-100/60
                backdrop-blur-sm
                border border-white/10
                hover:border-custom-orange-50/20
                transition-all duration-300 
                transform hover:-translate-y-2 
                hover:shadow-xl"
            >
              <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl 
                bg-gradient-to-br from-custom-black-50/50 to-custom-black-100/50 
                group-hover:scale-110 transition-transform">
                <Icon className={`w-7 h-7 ${iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-custom-orange-50 
                transition-colors flex items-center">
                {title}
                <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 
                  transition-all transform group-hover:translate-x-1" />
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{description}</p>
            </Link>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-custom-black-100/40 backdrop-blur-xl rounded-2xl p-8 
          border border-white/10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-custom-orange-50 to-custom-orange-200 
                bg-clip-text text-transparent">
                Start Your Reading Journey
              </span>
            </h2>
            <p className="text-white/80 mb-6 text-lg">
              Whether you're a casual reader or a book enthusiast, BookHub helps you discover, 
              track, and enjoy your reading experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/collection" 
                className="bg-gradient-to-r from-custom-orange-50 to-custom-orange-200
                  hover:from-custom-orange-100 hover:to-custom-orange-200
                  text-custom-text-dark
                  px-6 py-3 
                  rounded-xl
                  transition-all
                  flex items-center 
                  gap-2
                  hover:shadow-lg
                  hover:shadow-custom-orange-50/20
                  font-semibold
                  hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                <span>Browse Books</span>
              </Link>
              <Link 
                to="/library" 
                className="border border-white/10 
                  bg-custom-black-100/40
                  hover:bg-custom-black-100/60
                  text-white
                  px-6 py-3 
                  rounded-xl
                  transition-all
                  flex items-center 
                  gap-2
                  hover:shadow-lg
                  hover:shadow-white/10
                  backdrop-blur-sm
                  font-semibold
                  hover:scale-105"
              >
                <Library className="w-5 h-5" />
                <span>My Library</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-radial from-custom-orange-50/10 
              via-custom-orange-100/5 to-transparent rounded-full blur-3xl"></div>
            <BookOpen className="w-48 h-48 text-white/20 relative z-10" />
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
          </div>
        </div>
      </div>
    </div>
  );
}