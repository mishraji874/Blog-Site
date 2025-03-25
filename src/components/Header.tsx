import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../icon.png';

export function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Link to="/" className="font-bold text-xl text-gray-900">
            <img src={icon} alt='Icon' className="h-12 w-12" />
          </Link>
          <div className="flex-1 flex justify-center items-center gap-8">
            <Link
              to="/"
              className={`text-m font-medium ${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className={`text-m font-medium ${isActive('/blogs') ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className={`text-m font-medium ${isActive('/about') ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              About Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}