import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Newsletter } from '../components/Newsletter';
import { ChevronRight } from 'lucide-react';
import { FaGlobe, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { blogs } from './BlogsPage';
import giphy from '../giphy.gif';

// Import the GIF
// const giphy = "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif";

export function HomePage() {
  useEffect(() => {
    document.title = "Blogs by Aditya Mishra";
}, []);
  const navigate = useNavigate();
  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
            alt="Blog background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Blogs by Aditya Mishra</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover insightful articles about Web3 Development, Blockchain Technology, Smart Contract Security, Web development, programming best practices, and software engineering.
          </p>
        </div>
      </section>

      {/* Developer Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div className="text-gray-700">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-lg leading-relaxed mb-6">
                🚀 Hey there! I'm <a href="https://mishraji874eth.on.fleek.co/" target="_blank"><strong>Aditya Mishra</strong></a> – <strong><em>a Web3 wizard and Full Stack Developer</em></strong> on a mission to revolutionize the digital world, one line of code at a time.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                💻 Whether it's crafting decentralized applications (dApps) that redefine trust or building scalable web platforms that just work , I thrive at the intersection of innovation and impact. With expertise spanning Solidity , blockchain security , and smart contract development , I've helped optimize transaction efficiency, boost user engagement, and slash operational costs for projects that matter.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                🎓 Currently pursuing my <em>Bachelor of Technology(B.Tech) from SRM Institute of Science and Technology</em>, I bring a unique blend of academic rigor and hands-on experience to the table. From sleek frontends to robust backends, cloud tech to DevOps pipelines, and cutting-edge blockchain tools – I've got the full stack covered.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                ✨ But what really drives me? <em>Decentralization</em>. I'm obsessed with the potential of decentralized systems to reshape industries, empower users, and create a fairer digital future. Through this blog, I'll share insights, tutorials, and deep dives into the world of Web3, blockchain, and beyond – all while keeping things fun, approachable, and actionable.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Feel free to connect with me on social media or check out my GitHub for some of my latest projects!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://mishraji874eth.on.fleek.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <FaGlobe />
                </a>
                <a
                  href="https://github.com/mishraji874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-mishra-a76237226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-600 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/mishraji874_eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Right Side: Animated GIF */}
            <div className="flex justify-center">
              <img
                src={giphy}
                alt="Developer Animation"
                className="w-64 h-64 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
          <button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            View all posts
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
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
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Show More Posts
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}