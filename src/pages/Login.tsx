import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { BookOpen } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await signInWithPopup(auth, googleProvider);
      navigate('/profile');
    } catch (err) {
      setError('Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <BookOpen className="w-20 h-20 text-orange-500 mx-auto" />
          <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Welcome to BookHub
          </h2>
          <p className="mt-2 text-gray-400">
            Sign in to access your personal library and bookshelves
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 
                     border-orange-500/30 rounded-xl hover:bg-orange-500/10 
                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-black text-gray-500">or</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/browse')}
            className="w-full px-4 py-3 bg-orange-500 rounded-xl font-semibold 
                     hover:bg-orange-600 transition-colors"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}