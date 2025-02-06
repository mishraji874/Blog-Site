// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import { blogs } from './BlogsPage';

// export function BlogPost() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const blog = blogs.find(b => b.id === Number(id));

//     if (!blog) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
//                     <button
//                         onClick={() => navigate('/blogs')}
//                         className="text-indigo-600 hover:text-indigo-800"
//                     >
//                         Return to blogs
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 py-12">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <button
//                     onClick={() => navigate('/blogs')}
//                     className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
//                 >
//                     <ArrowLeft size={20} />
//                     Back to blogs
//                 </button>

//                 {typeof blog.content === 'string' ? (
//                     <article className="prose prose-lg max-w-none">
//                         <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
//                         <img
//                             src={blog.image}
//                             alt={blog.title}
//                             className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
//                         />
//                         {blog.content.split('\n').map((paragraph, index) => (
//                             <p key={index} className="mb-4">
//                                 {paragraph}
//                             </p>
//                         ))}
//                     </article>
//                 ) : (
//                     blog.content
//                 )}
//             </div>
//         </div>
//     );
// }

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogs } from './BlogsPage';

// Function to generate a slug (same as BlogsPage)
const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

export function BlogPost() {
    const { title } = useParams<{ title: string }>();
    const navigate = useNavigate();
    
    // Log the extracted title for debugging
    console.log("Extracted title from URL:", title);

    // Ensure we're using the correct slug comparison
    const blog = blogs.find((b) => b.slug === title);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
                    <button
                        onClick={() => navigate('/blogs')}
                        className="text-indigo-600 hover:text-indigo-800"
                    >
                        Return to blogs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                <button
                    onClick={() => navigate('/blogs')}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to blogs
                </button>
                {/* Title */}
                {/* <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1> */}

                {/* Metadata */}
                {/* <div className="flex items-center text-gray-600 text-sm mb-6">
                    <span>Published on Jan 30, 2025</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                </div> */}

                {/* Header Image */}
                {/* <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg mb-6" /> */}

                {/* Blog Content */}
                <div className="text-gray-700 text-lg leading-relaxed">{blog.content}</div>
            </div>
        </div>
    );
}
