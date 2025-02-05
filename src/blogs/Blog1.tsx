import React from "react";

const BlogPost: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-3xl">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          How to Create a DApp Using Solidity in 20 Minutes
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
          <span>Published on Jan 30, 2025</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>

        {/* Header Image */}
        <img
          src="https://api.onecodecamp.com/uploads/Courses/image-1709081598339.jpg"
          alt="Blockchain DApp Development"
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Decentralized applications (DApps) are the future of web development, offering trustless and secure solutions using blockchain technology. In this tutorial, we will create a simple DApp using Solidity and integrate it with React + TypeScript.
        </p>

        {/* Steps */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">Step 1: Set Up the Project</h2>
        <p className="text-gray-700 mb-4">Run the following command to create a React + TypeScript project:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto mb-6">
          <code>npx create-react-app my-dapp --template typescript</code>
        </pre>

        <h2 className="text-3xl font-semibold text-gray-900 mb-3">Step 2: Install Hardhat</h2>
        <p className="text-gray-700 mb-4">Hardhat is a development tool for smart contracts. Install it using:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto mb-6">
          <code>npm install --save-dev hardhat</code>
        </pre>

        <h2 className="text-3xl font-semibold text-gray-900 mb-3">Step 3: Create a Smart Contract</h2>
        <p className="text-gray-700 mb-4">Inside the Hardhat project, create a Solidity smart contract (MyContract.sol):</p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto mb-6">
          <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint public count;

    function increment() public {
        count += 1;
    }
}`}</code>
        </pre>

        <h2 className="text-3xl font-semibold text-gray-900 mb-3">Step 4: Deploy the Contract</h2>
        <p className="text-gray-700 mb-4">Deploy the contract using a Hardhat script:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto mb-6">
          <code>{`const hre = require("hardhat");

async function main() {
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const contract = await MyContract.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});`}</code>
        </pre>

        {/* Conclusion */}
        <h2 className="text-3xl font-semibold text-gray-900 mt-6">Conclusion</h2>
        <p className="text-gray-700 text-lg leading-relaxed mt-2">
          Congratulations! You have successfully created and deployed a simple Solidity-based DApp using React and TypeScript. You can now build more advanced applications and explore blockchain integration further.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;