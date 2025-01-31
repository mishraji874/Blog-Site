import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { BlogsPage } from './pages/BlogsPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { BlogPost } from './pages/BlogPost';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;