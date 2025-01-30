import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PenSquare, LogIn, LogOut } from 'lucide-react';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="font-bold text-xl text-gray-900">
            Blogs by Aditya Mishra
          </Link>
          
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/new-post"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <PenSquare size={20} />
                  <span>Write</span>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <LogIn size={20} />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}