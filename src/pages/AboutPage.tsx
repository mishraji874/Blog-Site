import React from 'react';
import { FaGlobe, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Briefcase, GraduationCap, Code, Cpu } from 'lucide-react';
import profile from '../programming.gif'

// Import the GIF
// const giphy = "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif";

export function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                        alt="Technology Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Aditya Mishra
                            </h1>
                            <p className="text-xl text-white/90">
                                Web3 Wizard & Full Stack Developer
                            </p>
                        </div>
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                            <img
                                src={profile}
                                alt="Developer Animation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Quick Info */}
                    <div className="space-y-8">
                        {/* Education */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-xl font-semibold text-gray-900">Education</h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-900">Bachelor of Technology</h3>
                                    <p className="text-gray-600">SRM Institute of Science and Technology</p>
                                    <p className="text-sm text-gray-500">Current</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
                            </div>
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-2">
                                    {['Solidity', 'React', 'Javascript', 'TypeScript', 'Node.js', 'Smart Contracts', 'Web3.js', 'Blockchain', 'DApps', 'Vyper', 'Foundry', 'Moccasin', 'Hardhat', 'Truffle', 'SaaS', 'Git', 'Docker'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Connect */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Briefcase className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-xl font-semibold text-gray-900">Connect</h2>
                            </div>
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
                    </div>

                    {/* Right Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Me */}
                        <div className="bg-white rounded-xl shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
                            <div className="space-y-6 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    🚀 Hey there! I'm <a href="https://mishraji874eth.on.fleek.co/" target="_blank" className="text-indigo-600 hover:text-indigo-800"><strong>Aditya Mishra</strong></a> – <strong><em>a Web3 wizard and Full Stack Developer</em></strong> on a mission to revolutionize the digital world, one line of code at a time.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    💻 Whether it's crafting decentralized applications (dApps) that redefine trust or building scalable web platforms that just work, I thrive at the intersection of innovation and impact. With expertise spanning Solidity, blockchain security, and smart contract development, I've helped optimize transaction efficiency, boost user engagement, and slash operational costs for projects that matter.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    🎓 Currently pursuing my <em>Bachelor of Technology(B.Tech) from SRM Institute of Science and Technology</em>, I bring a unique blend of academic rigor and hands-on experience to the table. From sleek frontends to robust backends, cloud tech to DevOps pipelines, and cutting-edge blockchain tools – I've got the full stack covered.
                                </p>
                            </div>
                        </div>

                        {/* What Drives Me */}
                        <div className="bg-white rounded-xl shadow-md p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-2xl font-bold text-gray-900">What Drives Me</h2>
                            </div>
                            <div className="space-y-6 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    ✨ <em>Decentralization</em> is my passion. I'm obsessed with the potential of decentralized systems to reshape industries, empower users, and create a fairer digital future. Through my work and this blog, I share insights, tutorials, and deep dives into the world of Web3, blockchain, and beyond – all while keeping things fun, approachable, and actionable.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    My goal is to bridge the gap between traditional web development and the decentralized future, making blockchain technology more accessible to developers and users alike. I believe in the power of open-source collaboration and community-driven innovation to create lasting positive change in the tech ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}