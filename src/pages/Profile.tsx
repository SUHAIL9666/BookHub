import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { LogOut, Settings, BookOpen, Library } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-gray-900/50 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`}
              alt={user.displayName || 'User'}
              className="w-20 h-20 rounded-full border-2 border-orange-500"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.displayName}</h1>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Library className="text-orange-500" />
              Reading Stats
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-orange-500">0</div>
                <div className="text-sm text-gray-400">Books Read</div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-orange-500">0</div>
                <div className="text-sm text-gray-400">In Progress</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="text-orange-500" />
              Recent Activity
            </h2>
            <div className="text-gray-400 text-center py-4">
              No recent activity
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-400 
                     rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}