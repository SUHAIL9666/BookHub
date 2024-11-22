import { BookOpen, Library, Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: BookOpen, label: 'Home' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/library', icon: Library, label: 'My Library' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-orange-500/20 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <BookOpen className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent 
                           group-hover:from-orange-600 group-hover:to-orange-400 transition-colors">
              BookHub
            </span>
          </Link>
          
          <div className="flex space-x-8 max-md:hidden">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center text-sm relative group
                  ${isActive(path)
                    ? 'text-orange-500'
                    : 'text-gray-300 hover:text-orange-400 transition-colors'
                }`}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="mt-1">{label}</span>
                {!isActive(path) && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 
                    group-hover:w-full transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden">
            <button className="text-white hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}