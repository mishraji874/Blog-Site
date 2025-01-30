import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    created_at: string;
    author: {
      email: string;
    };
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <Link to={`/post/${post.id}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{post.author.email}</span>
          <span className="mx-2">•</span>
          <time>
            {formatDistance(new Date(post.created_at), new Date(), {
              addSuffix: true,
            })}
          </time>
        </div>
      </div>
    </article>
  );
}