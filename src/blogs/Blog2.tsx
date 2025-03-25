import React, { useEffect } from "react";

const NetworkingBlog: React.FC = () => {
    useEffect(() => {
        document.title = "Networking 101 | Aditya Mishra";
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Networking 101
                </h1>

                {/* Author and Metadata */}
                <div className="flex items-center text-gray-600 text-sm mb-6">
                    <a
                        href="https://adityamishra-dev.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Aditya Mishra
                    </a>
                    <span className="mx-2">•</span>
                    <span>Published on Jan 29, 2023</span>
                    <span className="mx-2">•</span>
                    <span>10 min read</span>
                </div>

                {/* Header Image */}
                <img
                    src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*yDZ4O2EsLoVJSdDC.jpeg"
                    alt="Networking Basics"
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Introduction */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Networking is the backbone of modern technology and is essential for connecting devices and services. In this article, you will learn about key concepts, terminology, and protocols used in networking.
                </p>

                {/* Terminology */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Terminology</h2>
                <p className="text-gray-700 mb-4">Understanding common networking terms:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>Connection:</strong> Transfer of data through a network.</li>
                    <li><strong>Packet:</strong> Smallest unit of data transferred over a network.</li>
                    <li><strong>Network Interface:</strong> Software interface connecting to networking hardware.</li>
                    <li><strong>LAN:</strong> Local Area Network, a private network.</li>
                    <li><strong>WAN:</strong> Wide Area Network, larger than a LAN.</li>
                    <li><strong>Protocol:</strong> A set of rules for network communication.</li>
                    <li><strong>Port:</strong> A virtual endpoint for communication.</li>
                    <li><strong>Firewall:</strong> Controls incoming and outgoing traffic.</li>
                    <li><strong>NAT:</strong> Network Address Translation for routing requests.</li>
                    <li><strong>VPN:</strong> Virtual Private Network for secure connections.</li>
                </ul>

                {/* Network Layers */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Network Layers</h2>
                <p className="text-gray-700 mb-4">
                    Networking is structured in layers to enable efficient communication.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-2">TCP/IP Model</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>Application Layer:</strong> Handles user data and communication.</li>
                    <li><strong>Transport Layer:</strong> Manages process-to-process communication.</li>
                    <li><strong>Internet Layer:</strong> Routes data between networks.</li>
                    <li><strong>Link Layer:</strong> Manages physical network connections.</li>
                </ul>

                {/* Interfaces */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Interfaces</h2>
                <p className="text-gray-700 mb-6">
                    A network interface is a communication point for connecting to a network.
                </p>

                {/* Protocols */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Protocols</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>TCP:</strong> Reliable, ordered data transmission.</li>
                    <li><strong>UDP:</strong> Fast, connectionless communication.</li>
                    <li><strong>IP:</strong> Handles routing and addressing.</li>
                    <li><strong>HTTP:</strong> Foundation of web communication.</li>
                    <li><strong>HTTPS:</strong> Secure version of HTTP.</li>
                    <li><strong>DNS:</strong> Resolves domain names to IP addresses.</li>
                </ul>

                {/* Conclusion */}
                <h2 className="text-3xl font-semibold text-gray-900 mt-6">Summary</h2>
                <p className="text-gray-700 text-lg leading-relaxed mt-2">
                    By now, you should have a solid understanding of networking concepts, terminology, and protocols. This knowledge will help you better navigate advanced networking topics.
                </p>
            </div>
        </div>
    );
};

export default NetworkingBlog;
