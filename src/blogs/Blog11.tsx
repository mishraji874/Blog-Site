import React, { useEffect } from "react";

const BlockchainPythonBlog: React.FC = () => {
    useEffect(() => {
        document.title = "Building Your First Blockchain in Python | Aditya Mishra";
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Building Your First Blockchain in Python
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
                    <span>Published on Apr 8, 2025</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                </div>

                {/* Featured Image */}
                <img
                    src="https://cdn.activestate.com/wp-content/uploads/2020/02/BuildaBlockchainWithPython.png"
                    alt="Building a Blockchain in Python"
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Have you ever wondered how blockchain technology actually works under the hood?
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Beyond the hype about cryptocurrencies and NFTs lies an elegant data structure that has revolutionized how we think about trust in digital systems. In this article, I’ll guide you through creating your very own blockchain from scratch using Python.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    By the end of this journey, you’ll understand the core concepts that make blockchain technology so revolutionary, and you’ll have built a working prototype yourself!
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">The Essence of Blockchain</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    At its heart, a blockchain is simply a linked list of blocks, where each block contains data and is cryptographically connected to the previous block. This structure creates an immutable chain where altering any block would break the entire chain — a property that gives blockchain its powerful integrity guarantees.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Let’s break down the key components we’ll build:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>Block:</strong> The fundamental unit containing data (transactions in our case).</li>
                    <li><strong>Blockchain:</strong> The chain of blocks, with rules for adding new blocks.</li>
                    <li><strong>Hash Functions:</strong> Cryptographic functions that create digital fingerprints.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Building Our Blockchain Step by Step</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Let’s start coding! First, we’ll need a few imports:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                    import hashlib
                    import json
                    import time
                    from datetime import datetime
                </pre>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Block Class</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                    {`class Block:
    def __init__(self, index, timestamp, transactions, previous_hash):
        """
        Initialize a new Block in the Blockchain.
        Args:
            index: Position of the block in the chain
            timestamp: Time of block creation
            transactions: List of transactions contained in the block
            previous_hash: Hash of the previous block
        """
        self.index = index
        self.timestamp = timestamp
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.hash = self.compute_hash()

    def compute_hash(self):
        """
        Create a SHA-256 hash of the block using its attributes.
        Returns:
            str: The hexadecimal hash of the block
        """
        # Convert the block attributes to a string
        block_string = json.dumps({
            "index": self.index,
            "timestamp": str(self.timestamp),
            "transactions": self.transactions,
            "previous_hash": self.previous_hash
        }, sort_keys=True)
        # Return the hash as a hexadecimal string
        return hashlib.sha256(block_string.encode()).hexdigest()

    def __str__(self):
        """String representation of the block for easier visualization"""
        return (f"Block #{self.index}\\n"
                f"Timestamp: {self.timestamp}\\n"
                f"Transactions: {self.transactions}\\n"
                f"Previous Hash: {self.previous_hash}\\n"
                f"Hash: {self.hash}\\n")`}
                </pre>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Blockchain Class</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                    {`class Blockchain:
    def __init__(self):
        """Initialize a new Blockchain with a genesis block."""
        self.chain = []
        self.create_genesis_block()

    def create_genesis_block(self):
        """
        Create the first block in the blockchain (genesis block).
        This block has index 0 and arbitrary previous hash.
        """
        genesis_block = Block(0, datetime.now(), ["Genesis Block"], "0")
        self.chain.append(genesis_block)
        return genesis_block

    def get_latest_block(self):
        """Return the most recent block in the chain."""
        return self.chain[-1]

    def add_block(self, transactions):
        """
        Add a new block to the chain with the given transactions.
        Args:
            transactions: List of transaction data to store in the block
        Returns:
            Block: The newly created and added block
        """
        latest_block = self.get_latest_block()
        new_block = Block(
            index=latest_block.index + 1,
            timestamp=datetime.now(),
            transactions=transactions,
            previous_hash=latest_block.hash
        )
        self.chain.append(new_block)
        return new_block

    def is_chain_valid(self):
        """
        Verify the current blockchain integrity.
        Check that all blocks are properly linked by their hashes.
        Returns:
            bool: True if the chain is valid, False otherwise
        """
        for i in range(1, len(self.chain)):
            current_block = self.chain[i]
            previous_block = self.chain[i-1]
            # Check if the current block's hash is still valid
            if current_block.hash != current_block.compute_hash():
                print(f"Block #{current_block.index} hash is invalid!")
                return False
            # Check if the block points to the correct previous hash
            if current_block.previous_hash != previous_block.hash:
                print(f"Block #{current_block.index} has broken the chain!")
                return False
        return True

    def __str__(self):
        """String representation of the entire blockchain"""
        blockchain_str = "Blockchain:\\n"
        for block in self.chain:
            blockchain_str += str(block) + "\\n"
        return blockchain_str`}
                </pre>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Understanding the Code</h2>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Block Class</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Let’s examine our Block class to understand what’s happening:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>Initialization:</strong> Each block has four main properties: index, timestamp, transactions, and previous_hash.</li>
                    <li><strong>Hash Computation:</strong> The `compute_hash()` method creates a unique fingerprint of the block using SHA-256.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Blockchain Class</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our Blockchain class manages the collection of blocks:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>Genesis Block:</strong> Every blockchain begins with a special first block called the “genesis block.”</li>
                    <li><strong>Adding Blocks:</strong> The `add_block()` method adds new blocks to the chain.</li>
                    <li><strong>Validation:</strong> The `is_chain_valid()` method verifies the integrity of the entire blockchain.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Why This Matters: The Power of Immutability</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The beauty of this design becomes apparent when we run our test code. When we try to tamper with a transaction in block #1, the validation function immediately detects it. This immutability is what enables trust in an otherwise trustless environment.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Extending Our Implementation</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    While our blockchain demonstrates the core concepts, a production blockchain would include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Proof of Work: A mechanism that makes adding blocks computationally expensive.</li>
                    <li>Distributed Consensus: Rules for multiple nodes to agree on the valid chain.</li>
                    <li>Mining Rewards: Incentives for nodes to participate in validation.</li>
                    <li>Advanced Cryptography: For digital signatures, address generation, etc.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Conclusion</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    By building this simple blockchain in Python, you’ve gained a fundamental understanding of how blockchains work. The concept of cryptographically linked blocks forms the foundation for revolutionary technologies like Bitcoin, Ethereum, and countless other blockchain applications.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Now that you understand the basics, you’re ready to explore more advanced blockchain concepts and perhaps even contribute to this groundbreaking technology!
                </p>
            </div>
        </div>
    );
};

export default BlockchainPythonBlog;