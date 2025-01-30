import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import giphy from "../giphy.gif"; // Ensure this path is correct
import { PostCard } from "../components/PostCard";
import { Newsletter } from "../components/Newsletter";
import { supabase } from "../lib/supabase";
import { ChevronDown } from "lucide-react";

const POSTS_PER_PAGE = 6;

export function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const from = 0;
      const to = page * POSTS_PER_PAGE - 1;

      const { data, error, count } = await supabase
        .from("posts")
        .select(
          `
          id,
          title,
          excerpt,
          created_at,
          author:author_id(email)
        `,
          { count: "exact" }
        )
        .eq("published", true)
        .order("created_at", { ascending: false })
        .range(from, to);

      if (!error) {
        setPosts(data);
        setHasMore(count > to + 1);
      }
      setLoading(false);
    }

    fetchPosts();
  }, [page]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

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
            Discover insightful articles, share your thoughts, and join our community of writers and readers.
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
                🚀 Hey there! I’m <a href="https://mishraji874eth.on.fleek.co/" target="_blank"><strong>Aditya Mishra</strong></a> – <strong><em>a Web3 wizard and Full Stack Developer</em></strong> on a mission to revolutionize the digital world, one line of code at a time.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                💻 Whether it’s crafting decentralized applications (dApps) that redefine trust or building scalable web platforms that just work , I thrive at the intersection of innovation and impact. With expertise spanning Solidity , blockchain security , and smart contract development , I’ve helped optimize transaction efficiency, boost user engagement, and slash operational costs for projects that matter.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                🎓 Currently pursuing my <em>Bachelor of Technology(B.Tech) from SRM Institute of Science and Technology</em>, I bring a unique blend of academic rigor and hands-on experience to the table. From sleek frontends to robust backends, cloud tech to DevOps pipelines, and cutting-edge blockchain tools – I’ve got the full stack covered.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                ✨ But what really drives me? <em>Decentralization</em>. I’m obsessed with the potential of decentralized systems to reshape industries, empower users, and create a fairer digital future. Through this blog, I’ll share insights, tutorials, and deep dives into the world of Web3, blockchain, and beyond – all while keeping things fun, approachable, and actionable.
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

      {/* Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setPage(page + 1)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Show More Posts
              <ChevronDown size={20} />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}