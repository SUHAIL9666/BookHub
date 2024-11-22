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
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-orange-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              BookHub
            </span>
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center text-sm ${
                  isActive(path)
                    ? 'text-orange-500'
                    : 'text-gray-300 hover:text-orange-400 transition-colors'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="mt-1">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}