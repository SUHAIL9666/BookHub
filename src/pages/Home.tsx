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
    navigate(`/search?genre=${encodeURIComponent(genre)}`);
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Vast Collection',
      description: 'Access millions of books from the Google Books library',
      path: '/collection',
      iconColor: 'text-custom-orange-50',
      textColor: 'text-white'
    },
    {
      icon: TrendingUp,
      title: 'Trending Books',
      description: 'Discover what\'s popular in the reading community',
      path: '/trending',
      iconColor: 'text-purple-500',
      textColor: 'text-white'
    },
    {
      icon: Library,
      title: 'Personal Library',
      description: 'Create and organize your own digital bookshelves',
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
                </button>
              ))}
            </div>
          </div>
        </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}