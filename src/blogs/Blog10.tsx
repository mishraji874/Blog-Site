import React, { useEffect } from "react";

const CREATEBlog: React.FC = () => {
    useEffect(() => {
        document.title = "Understanding CREATE, CREATE2, and CREATE3 in Solidity | Aditya Mishra";
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Understanding CREATE, CREATE2, and CREATE3 in Solidity
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
                    <span className="mx-2">•</span>
                    <span>Apr 04, 2025</span>
                    <span className="mx-2">•</span>
                    <span>4 min read</span>
                </div>

                {/* Featured Image */}
                <img
                    src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*WqqrToU7tZUSh105ThJGNA.png"
                    alt="CREATE, CREATE2, CREATE3 in Solidity"
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Smart contract deployment on Ethereum has evolved significantly since its inception, with different opcodes providing various ways to deploy contracts.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This article explores the CREATE, CREATE2, and CREATE3 opcodes, their use cases, and their differences.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">The Original CREATE Opcode</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The CREATE opcode is the original method for deploying smart contracts on Ethereum. When using CREATE, the address of the deployed contract is determined by:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                    new_address = keccak256(rlp.encode([deployer_address, nonce]))
                </pre>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <b>Where:</b>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><b>`deployer_address`</b> is the address of the contract or EOA deploying the new contract.</li>
                    <li><b>`nonce`</b> is the deployer’s nonce (number of transactions/deployments).</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Limitations of CREATE</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><b>Non-deterministic addresses:</b> Since the address depends on the nonce, it’s impossible to know the contract address before deployment.</li>
                    <li><b>Sequential dependency:</b> Contract addresses change based on deployment order.</li>
                    <li><b>Limited predictability:</b> Makes it difficult to coordinate complex contract systems.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">The CREATE2 Innovation</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    CREATE2 was introduced in the Constantinople hard fork (EIP-1014) to allow for deterministic contract addresses. The address is calculated using:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                    new_address = keccak256(0xff ++ deployer_address ++ salt ++ keccak256(init_code))[12:]
                </pre>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <b>Where:</b>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><b>`0xff`</b> is a constant prefix.</li>
                    <li><b>`deployer_address`</b> is the address of the deploying contract/EOA.</li>
                    <li><b>`salt`</b> is a 32-byte value chosen by the deployer.</li>
                    <li><b>`init_code`</b> is the contract creation code.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Advantages of CREATE2</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><b>Deterministic addresses:</b> Contract addresses can be known before deployment.</li>
                    <li><b>Salt-based uniqueness:</b> Same code can be deployed to different addresses using different salts.</li>
                    <li><b>Better coordination:</b> Enables complex contract systems with predetermined addresses.</li>
                    <li><b>Counterfactual instantiation:</b> Enables interactions with contracts before they are deployed.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">The CREATE3 Pattern</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    CREATE3 is not an actual opcode but rather a pattern built on top of CREATE2. It provides even more predictability and consistency in contract deployment.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    A PR was opened to add CREATE3 as EIP 3171 (<a href="https://github.com/ethereum/EIPs/pull/3171" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">link</a>), but due to a lack of meaningful progress over a long period, it was eventually closed for inactivity. Discussions around the EIP lasted from its proposal in December 2020 until September 2024. In the meantime, a great workaround was developed: <a href="https://github.com/0xsequence/create3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sequence's CREATE3 library</a>.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">How CREATE3 Works</h3>
                <ol className="list-decimal list-inside text-gray-700 mb-6">
                    <li>Deploy a standardized proxy contract using CREATE2.</li>
                    <li>The proxy contract deploys the actual implementation using CREATE.</li>
                    <li>The final contract address only depends on the salt and the deployer, not the implementation code.</li>
                </ol>
                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Flc4LwDXcMQS5LDTvWJpNA.png" alt="CREATE3 Factory" />

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Advantages of CREATE3</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>Ultra-predictable addresses</strong>: The final contract address only depends on the deployer address and the salt value, not the implementation code or initialization parameters.</li>
                    <li><strong>Code independence</strong>: You can deploy different implementations to the same predetermined address (after destroying the previous one).</li>
                    <li><strong>Simplified deployment coordination</strong>: Makes it easier to coordinate complex systems of contracts across different networks.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for CREATE3</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Cross-chain deployments with identical addresses.</li>
                    <li>Upgradeable contracts with predictable addresses.</li>
                    <li>Complex contract systems requiring predetermined addresses.</li>
                    <li>Testing and development environments.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Comparing the Three Approaches</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    While each method has its advantages, CREATE3 offers the most predictability, albeit at the cost of increased complexity and gas usage.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Best Practices and Considerations</h2>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Security Considerations</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Always verify the deployed code matches expected bytecode.</li>
                    <li>Be cautious with `selfdestruct` in CREATE2/CREATE3 contracts.</li>
                    <li>Consider front-running risks in deployment transactions.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Gas Optimization</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>CREATE3 involves more gas overhead due to proxy deployment.</li>
                    <li>Balance predictability needs with gas costs.</li>
                    <li>Consider batching deployments when possible.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Implementation Guidelines</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Use standardized factory contracts.</li>
                    <li>Implement proper access controls.</li>
                    <li>Include thorough verification steps.</li>
                    <li>Document salt generation and management.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Conclusion</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The evolution from CREATE to CREATE2 and CREATE3 represents the blockchain community’s innovative approach to solving contract deployment challenges. While CREATE3 offers the most predictability, each method has its place in the Ethereum ecosystem. The choice between them should be based on specific project requirements, considering factors like gas costs, address predictability, and deployment flexibility.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Remember that CREATE3 is not an actual opcode but a pattern that builds upon CREATE2, offering additional features at the cost of increased complexity and gas usage. Understanding these tradeoffs is crucial for selecting the right deployment method for your smart contract system.
                </p>
            </div>
        </div>
    );
};

export default CREATEBlog;