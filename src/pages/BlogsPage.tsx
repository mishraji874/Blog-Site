import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../blogs/Blog1';

// New blog structure
export const blogs = [
    {
        id: 1,
        title: "How to Create a DApp Using Solidity in 20 Minutes",
        excerpt: "Learn how to build a decentralized application using Solidity and React + TypeScript in just 20 minutes.",
        image: "https://api.onecodecamp.com/uploads/Courses/image-1709081598339.jpg",
        content: <Blog1 />,
    },
    /* Previous blog posts (commented out for reference)
    {
      id: 2,
      title: "Mastering React Hooks",
      excerpt: "A deep dive into React Hooks and how they revolutionize state management and side effects in functional components.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      content: `...`
    },
    {
      id: 3,
      title: "Building Scalable APIs",
      excerpt: "Learn the best practices for designing and implementing scalable REST APIs that can handle millions of requests.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      content: `...`
    },
    {
      id: 4,
      title: "CSS Architecture at Scale",
      excerpt: "Strategies and best practices for maintaining large-scale CSS codebases using modern methodologies.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
      content: `...`
    },
    {
      id: 5,
      title: "TypeScript Best Practices",
      excerpt: "Essential TypeScript patterns and practices for building robust and maintainable applications.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      content: `...`
    },
    {
      id: 6,
      title: "Modern State Management",
      excerpt: "Comparing different state management solutions and choosing the right one for your application.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      content: `...`
    }
    */
];

export function BlogsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Blog Posts</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.id}`} className="block group">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:-translate-y-1">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}