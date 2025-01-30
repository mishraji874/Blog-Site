import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import profileImage from "./assets/profile-animation.gif";

export function Introduction() {
    return (
        <div className="container mx-auto p-4">
            <section className="text-center mb-12">
                <img src={"https://giphy.com/explore/backend-developer"} alt="Developer Animation" className="mx-auto w-32 h-32 rounded-full" />
                <h1 className="text-4xl font-bold mt-4">Welcome to My Blog</h1>
                <p className="text-gray-600 mt-2">I'm a passionate full-stack developer sharing my journey, projects, and thoughts on web development.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-gray-600"><FaGithub /></a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-400"><FaLinkedin /></a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-blue-300"><FaTwitter /></a>
                </div>
            </section>
        </div>
    );
}