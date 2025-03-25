import React, { useEffect } from "react";

const BitcoinAddressBlog: React.FC = () => {
    useEffect(() => {
        document.title = "How to Create a Bitcoin Address using bitcoinjs-lib | Aditya Mishra";
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    How to Create a Bitcoin Address using bitcoinjs-lib
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
                    <span>Published on Mar 25, 2025</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                </div>

                <img
                    src="https://coin.space/bassets/images/eq664tlUmR-716.webp"
                    alt="Bitcoin Address Creation"
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Content */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Users and developers in Bitcoin may find themselves needing more than one keypair address to develop and test code. In this guide, we'll talk about the different Bitcoin addresses available today, show you how to create a Bitcoin address using bitcoinjs-lib, and demonstrate the process of fetching a Bitcoin address's balance using QuickNode.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">What You Will Do</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Learn about the types of Bitcoin addresses</li>
                    <li>Create a Bitcoin node endpoint on QuickNode</li>
                    <li>Generate a new Bitcoin address using bitcoinjs-lib</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">What You Will Need</h2>
                <p className="text-gray-700 mb-6">
                    Basic understanding of Bitcoin and programming concepts
                    Node.js installed
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">Dependencies:</h3>
                    <ul className="list-disc list-inside">
                        <li>bitcoinjs-lib ^6.1.5</li>
                        <li>ecpair ^2.1.0</li>
                        <li>tiny-secp256k1 ^2.2.3</li>
                    </ul>
                </div>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">What is bitcoinjs-lib?</h2>
                <p className="text-gray-700 mb-6">
                    bitcoinjs-lib is a JavaScript library for interacting with the Bitcoin blockchain via Node.js and your browser. The library provides a wide variety of features like creating Bitcoin wallets (i.e., addresses) and multisigs, as well as creating, fetching, and broadcasting transactions.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Types of Bitcoin Addresses</h2>
                <p className="text-gray-700 mb-6">
                    In this section, we will dive into the different types of Bitcoin wallets and how they differ.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-blue-800">
                        <strong>info</strong><br />
                        SegWit (Segregated Witness) was an implemented soft-fork proposal (BIP141) that adjusted the transaction format used on Bitcoin
                    </p>
                </div>

                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>SegWit Address:</strong> Beginning with bc1, SegWit addresses are generated through a process that separates signature data from transaction data. They are ideal for frequent, small transactions due to lower fees and are less prone to transaction malleability.</li>
                    <li><strong>SegWit P2SH:</strong> These addresses start with 3 and combine SegWit with Pay-to-Script-Hash. They are created by wrapping a SegWit address in a P2SH format, making them suitable for users who require backward compatibility with systems that don't support native SegWit addresses, while still benefiting from SegWit features.</li>
                    <li><strong>SegWit P2PKH (Legacy):</strong> Starting with 1, these addresses merge the traditional Pay-to-Public-Key-Hash format with the efficiencies of SegWit. They are generated in a manner similar to traditional Bitcoin addresses but are enhanced with SegWit's lower fees and reduced transaction size. This type is ideal for users seeking a balance between the familiarity of traditional Bitcoin addresses and the advantages of SegWit.</li>
                    <li><strong>SegWit 3-of-4 Multi-Sig:</strong> Characterized by an address that is generated through a process involving multiple keys and a script defining multisig parameters, this wallet type is designed for high security and redundancy. It requires three out of four possible private keys to authorize a transaction, making it ideal for businesses or groups that need multiple approvals for transactions, such as corporations and DAOs.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Create a Bitcoin node endpoint on QuickNode</h2>
                <p className="text-gray-700 mb-6">
                    You're welcome to use public nodes or deploy and manage your own infrastructure; however, if you'd like 8x faster response times, you can leave the heavy lifting to us. Sign up for a free account here. Once logged in, click the Create endpoint button, then select the blockchain and network you want to deploy on. For the purpose of this guide, we'll choose the Bitcoin Testnet blockchain. After creating your endpoint, keep the HTTP Provider URL handy, as we'll need it in the programming portion of this guide.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Create a new Bitcoin address using bitcoinjs-lib</h2>
                <p className="text-gray-700 mb-6">
                    With our Bitcoin node endpoint created, let's move on to creating our new Bitcoin address. For this guide, we will be demonstrating how to create a Bitcoin address using the
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">Step 1. Initialize Project</h3>
                    <p className="mb-4">First, open a terminal or command prompt window and run the command below to initiate a new project folder and npm project.</p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        mkdir BitcoinAddress && cd BitcoinAddress
                        npm init -y
                    </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">Step 2. Install Dependencies</h3>
                    <p className="mb-4">Your code requires the bitcoinjs-lib library. Install it by running:</p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        npm install bitcoinjs-lib ecpair tiny-secp256k1
                    </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">Step 3. Create Implementation</h3>
                    <p className="mb-4">Create a new JavaScript file in your project directory, for example, index.js. After, copy the provided code below into this file:</p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        {`const bitcoin = require('bitcoinjs-lib');
const ECPairFactory = require('ecpair').default;
const ecc = require('tiny-secp256k1');
const fs = require('fs');

const ECPair = ECPairFactory(ecc);
const network = bitcoin.networks.testnet; // Otherwise, bitcoin = mainnet and regnet = local

async function createP2PKHwallet() {
    try {
        const keyPair = ECPair.makeRandom({ network: network });
        const { address } = bitcoin.payments.p2pkh({
          pubkey: keyPair.publicKey,
          network: network,
        });
        const privateKey = keyPair.toWIF()

        console.log(\`| Public Address | \${address} |\`)
        console.log(\`| Private Key | \${privateKey} |\`)

        const wallet = {
            address: address,
            privateKey: privateKey
        };

        const walletJSON = JSON.stringify(wallet, null, 4);

        fs.writeFileSync('wallet.json', walletJSON);

        console.log(\`Wallet created and saved to wallet.json\`);
    } catch (error) {
        console.log(error)
    }
}

createP2PKHwallet();`}
                    </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">Step 4. Run the Script</h3>
                    <p className="mb-4">Execute the script by running the command below:</p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        node index.js
                    </pre>
                </div>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Logs for Simplified Debugging</h2>
                <p className="text-gray-700 mb-6">
                    You can now access Logs for your RPC endpoints, helping you troubleshoot issues more effectively. If you encounter an issue with your RPC calls, simply check the logs in your QuickNode dashboard to identify and resolve problems quickly. Learn more about log history limits on our pricing page.
                </p>
            </div>
        </div>
    );
};

export default BitcoinAddressBlog;
