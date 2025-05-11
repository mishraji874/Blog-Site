import React, { useEffect } from "react";

const DigitalSignaturesBlog: React.FC = () => {
    useEffect(() => {
        document.title = "Safeguarding Solidity's ecrecover Against Signature Malleability | Aditya Mishra";
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Safeguarding Solidity's ecrecover Against Signature Malleability
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
                    <span>Published on May 11, 2025</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                </div>

                {/* Featured Image */}
                <img
                    src="https://miro.medium.com/v2/resize:fit:728/1*MVc6Bwoj5LWsZ-5xBnnkEw.png"
                    alt="Digital Signatures and ECDSA"
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Ethereum’s ecrecover is crucial for verifying if a message was signed by a specific address, essential for many Web3 applications. Before diving into the security, let’s understand how digital signatures work.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Digital signatures, similar to asymmetric cryptography but reversed, allow a sender to sign a message by hashing it with their private key, producing a hash digest unique to the sender. This way, the recipient can use the sender’s public key to hash the message and verify its authenticity.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Elliptic Curve Digital Signature Algorithm (ECDSA)</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Ethereum uses ECDSA — a compact and efficient public key encryption method based on elliptic curve cryptography. It ensures small, highly secure keys, and ecrecover enables smart contracts to recover a signer’s address from a signature.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Ethereum Digital Signature Standards</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Ethereum offers three main standards for signing data, each with unique traits and security implications:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><b>eth_sign:</b> The simplest, but also riskiest. It enables signing arbitrary data, potentially authorizing future transactions unknowingly. This method is considered unsafe for users and is generally discouraged.</li>
                    <li><b>personal_sign:</b> This method (EIP-191) prefixes data with "\x19Ethereum Signed Message:\n" + len(message), ensuring the signature isn’t valid for transactions, adding a layer of security.</li>
                    <li><b>signTypedData_v4:</b> Introduced by EIP-712, this standard is now widely adopted to help developers secure message structures, making signatures safer and more standardized.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Problem: What is Signature Malleability?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Signature malleability occurs due to the nature of elliptic curves, where valid signatures can be manipulated to create multiple “equivalent” but slightly different signatures that ecrecover might accept. An attacker could exploit this to create multiple variants of a single valid signature, deceiving the contract into accepting an altered transaction. Without extra validation, this can lead to potential spoofing and replay attacks, which undermine the contract’s integrity.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Solution: Using OpenZeppelin’s ECDSA Library</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    To counteract signature malleability risks, developers should use OpenZeppelin’s ECDSA library. This library applies strict checks on the signature parameters (v, r, and s) to enforce signature uniqueness. Additionally, OpenZeppelin’s approach filters out invalid signatures by constraining each component within a specific range, helping to ensure each signature is unique and non-replicable.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Example Code Using OpenZeppelin's ECDSA</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
                    <code>{`pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract SignatureValidator {
    using ECDSA for bytes32;
    function isSignatureValid(bytes32 hash, bytes memory signature) public pure returns (bool) {
        address signer = hash.recover(signature);
        return (signer != address(0)); // Replace with the actual signer's address
    }
}`}</code>
                </pre>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Example Code Using ecrecover Directly</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
                    <code>{`pragma solidity ^0.8.0;

contract SignatureValidator {
    function isSignatureValid(bytes32 hash, uint8 v, bytes32 r, bytes32 s) public pure returns (bool) {
        require(uint256(s) <= 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0, "Invalid 's' value");
        require(v == 27 || v == 28, "Invalid 'v' value");
        address signer = ecrecover(hash, v, r, s);
        require(signer != address(0), "Invalid signer");
        return true; // Return true if the address is valid; replace with expected address check
    }
}`}</code>
                </pre>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Conclusion</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    While ecrecover offers a powerful tool for signature validation, using libraries like OpenZeppelin’s ECDSA provides a secure way to avoid malleability issues, helping to protect contracts from attacks. Developers should adopt these best practices to ensure their contracts only process authentic, tamper-proof signatures.
                </p>
            </div>
        </div>
    );
};

export default DigitalSignaturesBlog;