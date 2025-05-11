import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../blogs/Blog1';
import Blog2 from '../blogs/Blog2';
import Blog3 from '../blogs/Blog3';
import Blog4 from '../blogs/Blog4';
import Blog5 from '../blogs/Blog5';
import Blog6 from '../blogs/Blog6';
import Blog7 from '../blogs/Blog7';
import Blog8 from '../blogs/Blog8';
import Blog9 from '../blogs/Blog9';
import Blog10 from '../blogs/Blog10';
import Blog11 from '../blogs/Blog11';
import Blog12 from '../blogs/Blog12';
import Blog13 from '../blogs/Blog13';
// Function to generate a slug from the title
const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

// Blog data with slugs
export const blogs = [
    {
        id: 1,
        title: "How to Create a DApp Using Solidity in 20 Minutes",
        slug: generateSlug("How to Create a DApp Using Solidity in 20 Minutes"),
        excerpt: "Learn how to build a decentralized application using Solidity and React + TypeScript in just 20 minutes.",
        image: "https://api.onecodecamp.com/uploads/Courses/image-1709081598339.jpg",
        content: <Blog1 />,
    },
    {
        id: 2,
        title: "Networking 101: Understanding the Basics of Modern Connectivity",
        slug: generateSlug("Networking 101: Understanding the Basics of Modern Connectivity"),
        excerpt: "Learn the essential concepts, terminology, and protocols of networking. This guide covers key fundamentals to help you navigate the world of modern networks.",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*yDZ4O2EsLoVJSdDC.jpeg",
        content: <Blog2 />,
    },
    {
        id: 3,
        title: "Blockchain Technology: A Deep Dive into Decentralization",
        slug: generateSlug("Blockchain Technology: A Deep Dive into Decentralization"),
        excerpt: "Explore the fundamental principles, history, and applications of blockchain technology. Learn how decentralization is shaping the future of digital transactions.",
        image: "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
        content: <Blog3 />,
    },
    {
        id: 4,
        title: "Understanding Hash Functions in Solidity: A Deep Dive into Data Integrity and Security",
        slug: generateSlug("Understanding Hash Functions in Solidity: A Deep Dive into Data Integrity and Security"),
        excerpt: "Explore the essential role of hash functions in Solidity for maintaining data integrity and security in blockchain applications.",
        image: "https://programtheblockchain.com/storage/mapping.png",
        content: <Blog4 />,
    },
    {
        id: 5,
        title: "Understanding Abstract Contracts in Solidity",
        slug: generateSlug("Understanding Abstract Contracts in Solidity"),
        excerpt: "Learn about abstract contracts in Solidity, their purpose, and how they enable code reuse and modular design.",
        image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fver38tcbzyouua9t55m0.png",
        content: <Blog5 />,
    },
    {
        id: 6,
        title: "Discover Account Abstraction ERC-4337: Simplifying Ethereum's User Experience with Innovative Account Models",
        slug: generateSlug("Discover Account Abstraction ERC-4337"),
        excerpt: "Learn about ERC-4337, a groundbreaking standard for account abstraction in Ethereum.",
        image: "https://developers.moralis.com/wp-content/uploads/2023/10/Ethereum-Art-Image-with-Logo-plus-a-black-text-stating-ERC-4337-768x384.png",
        content: <Blog6 />,
    },
    {
        id: 7,
        title: "How to Create a Bitcoin Address using bitcoinjs-lib",
        slug: generateSlug("How to Create a Bitcoin Address using bitcoinjs-lib"),
        excerpt: "Learn how to create a Bitcoin address using bitcoinjs-lib.",
        image: "https://coin.space/bassets/images/eq664tlUmR-716.webp",
        content: <Blog7 />,
    },
    {
        id: 8,
        title: "Difference between Popular NFT Standards: ERC-721, ERC-721A, and ERC-1155",
        slug: generateSlug("Difference between Popular NFT Standards"),
        excerpt: "Learn what is the difference between the different NFT standards.",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*N_cmuYlNfWgbV0sp1cKYVw.png",
        content: <Blog8 />,
    },
    {
        id: 9,
        title: "Guide to Sharding Private Keys for Enhanced Security",
        slug: generateSlug("Guide to Sharding Private Keys for Enhanced Security"),
        excerpt: "Learn how private key sharding works.",
        image: "https://cdn-ilaimmf.nitrocdn.com/HwuKmSkzAdeInVFRkpeYovWxaTlnjAGn/assets/images/optimized/rev-b8ffd1e/www.liminalcustody.com/wp-content/uploads/2024/01/Key-Sharding-Future-of-Crypto-Security-1536x971.webp",
        content: <Blog9 />,
    },
    {
        id: 10,
        title: "Understanding CREATE, CREATE2, and CREATE3 in Solidity",
        slug: generateSlug("Understanding CREATE, CREATE2, and CREATE3 in Solidity"),
        excerpt: "Explore the evolution of smart contract deployment with CREATE, CREATE2, and CREATE3.",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*0I2grrfGZJfw1pHvi6IX8g.png",
        content: <Blog10 />,
    },
    {
        id: 11,
        title: "From Blocks to Chains: Building Your First Blockchain in Python",
        slug: generateSlug("Building Your First Blockchain in Python"),
        excerpt: "Learn how to build a blockchain from scratch using Python and understand its core concepts.",
        image: "https://cdn.activestate.com/wp-content/uploads/2020/02/BuildaBlockchainWithPython.png",
        content: <Blog11 />,
    },
    {
        id: 12,
        title: "Mastering Fuzzing in Blockchain: A Deep Dive into Securing Layer 1 Protocols & Smart Contracts",
        slug: generateSlug("Mastering Fuzzing in Blockchain: A Deep Dive into Securing Layer 1 Protocols & Smart Contracts"),
        excerpt: "Explore how fuzzing can help secure Layer 1 protocols and smart contracts in blockchain systems.",
        image: "https://wp.hacken.io/wp-content/uploads/2023/06/Blockchain-Fuzzing.jpg",
        content: <Blog12 />,
    },
    {
        id: 13,
        title: "Safeguarding Solidity's ecrecover Against Signature Malleability",
        slug: generateSlug("Safeguarding Solidity's ecrecover Against Signature Malleability"),
        excerpt: "Learn how to secure Ethereum's ecrecover function against signature malleability attacks using OpenZeppelin's ECDSA library.",
        image: "https://miro.medium.com/v2/resize:fit:728/1*MVc6Bwoj5LWsZ-5xBnnkEw.png",
        content: <Blog13 />,
    }
];

export function BlogsPage() {
    useEffect(() => {
        document.title = "Blogs | Aditya Mishra";
    }, []);
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Blog Posts</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.slug}`} className="block group">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:-translate-y-1">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
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
