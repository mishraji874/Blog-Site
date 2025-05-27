import React, { useEffect } from "react";

const FlashLoansBlog: React.FC = () => {
    useEffect(() => {
        document.title = "Understanding Flash Loan Attacks | Aditya Mishra";
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Understanding Flash Loan Attacks
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
                    <span>Published on May 27, 2025</span>
                    <span className="mx-2">•</span>
                    <span>10 min read</span>
                </div>

                {/* Featured Image */}
                <img
                    src="https://lh6.googleusercontent.com/ONsCHP1R5vVNvfUiGvsyRNNhzd5CjXirp4lCrQPIhx4A3lXAq54mXYE1ik0pzFyc4wunchhEZKi5SHAZ6TAx7w3irhqDkB1fp_ZMjFLIOFEX_lWjfZMllUE08wlVuFwqfYnOA9HY"
                    alt="Flash Loans Attack"
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Flash loans are a groundbreaking innovation in decentralized finance (DeFi), offering users access to large amounts of liquidity without requiring collateral. While they enable legitimate use cases, such as arbitrage and liquidation, they also pose significant risks to decentralized autonomous organizations (DAOs) and governance systems. This article explores how flash loans work, their potential for exploitation, and how they can be used to attack governance mechanisms.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">What Are Flash Loans?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Flash loans are uncollateralized loans that must be borrowed and repaid within the same blockchain transaction. If the loan is not repaid by the end of the transaction, the entire operation is reverted. Some common legitimate use cases include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 text-lg leading-relaxed">
                    <li>Arbitrage opportunities between decentralized exchanges.</li>
                    <li>Liquidating undercollateralized positions.</li>
                    <li>Complex financial operations requiring large capital.</li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    However, their instantaneous nature also makes them a powerful tool for malicious actors to exploit vulnerabilities in governance systems.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">How Flash Loans Exploit Governance Systems</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Governance systems in DAOs often rely on token-based voting mechanisms. Token holders can propose and vote on actions, with decisions typically based on the number of tokens held. Flash loans allow attackers to temporarily acquire a majority of governance tokens, manipulate proposals, and execute malicious actions — all without long-term ownership.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Steps in a Governance Attack</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 text-lg leading-relaxed">
                    <li><strong>Borrow Tokens</strong>: Use a flash loan to borrow a significant amount of governance tokens.</li>
                    <li><strong>Manipulate Voting Power</strong>: Temporarily gain majority control over token-based voting.</li>
                    <li><strong>Propose Malicious Action</strong>: Queue an action that benefits the attacker (e.g. draining funds).</li>
                    <li><strong>Execute Action</strong>: After fulfilling any time delays or prerequisites, execute the proposal.</li>
                    <li><strong>Repay Loan</strong>: Return borrowed tokens within the same transaction.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Easy Example: Damn Vulnerable DeFi Challenge #6 ("Selfie")</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The "Selfie" challenge from Damn Vulnerable DeFi demonstrates how flash loans can exploit governance systems. Here's a simplified breakdown of how attackers can drain funds from a vulnerable lending pool:
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Challenge Overview</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 text-lg leading-relaxed">
                    <li>A lending pool offers flash loans of DVT tokens.</li>
                    <li>Governance mechanisms control the pool's operations.</li>
                    <li>The goal is to drain 1.5 million DVT tokens from the pool.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Vulnerability</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The governance contract allows any token holder with at least 50% of the token supply to propose actions. Flash loans enable attackers to temporarily acquire this majority.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Key Code Snippet</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The vulnerability lies in how voting power is determined:
                </p>
                <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto mb-6">
                    <code>{`function _hasEnoughVotes(address account) private view returns (bool) {
    uint256 balance = governanceToken.getBalanceAtLastSnapshot(account);
    uint256 halfTotalSupply = governanceToken.getTotalSupplyAtLastSnapshot() / 2;
    return balance > halfTotalSupply;
}`}</code>
                </pre>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Attackers exploit this by taking a snapshot after borrowing tokens via flash loan, temporarily meeting the voting threshold required to queue malicious proposals.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Want to Level Up FAST? Take the Smart Contract Hacking Course</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    If you're eager to learn how these attacks work and want to level up your skills quickly, the Smart Contract Hacking Course is your shortcut to mastering DeFi security. Instead of spending countless hours gathering information across the internet, this course provides:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 text-lg leading-relaxed">
                    <li><strong>Curated Content</strong>: Everything you need in one place — no distractions or wasted time.</li>
                    <li><strong>Hands-On Exercises</strong>: Real-world challenges based on actual DeFi hacks like "Selfie."</li>
                    <li><strong>Fun and Engaging Learning</strong>: Interactive lessons designed to keep you motivated while learning complex topics.</li>
                    <li><strong>Community Support</strong>: Join an exclusive Discord community with JohnnyTime, other instructors, and students for guidance and collaboration.</li>
                    <li><strong>Certification</strong>: Earn an official Solidity Smart Contract Hacker (SSCH) certificate upon completing the final exam — a valuable credential for Web3 security careers.</li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This course is perfect if you want to fast-track your journey into smart contract security while having fun along the way!
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Mitigating Flash Loan Attacks</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    To secure DAOs against flash loan attacks, developers must implement robust governance mechanisms:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 text-lg leading-relaxed">
                    <li><strong>Token Locking</strong>: Require tokens to be locked before voting eligibility.</li>
                    <li><strong>Time-Locked Proposals</strong>: Introduce delays between proposal submission and execution.</li>
                    <li><strong>Snapshot Validation</strong>: Ensure snapshots are taken before proposals are submitted or votes cast.</li>
                    <li><strong>Voting Weight Caps</strong>: Limit voting power per address or use quadratic voting mechanisms.</li>
                    <li><strong>Monitoring Systems</strong>: Deploy tools to detect unusual activity and respond swiftly.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Conclusion</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Flash loans are both a powerful financial innovation and a significant security risk for DAOs and governance systems. Understanding their mechanics and vulnerabilities is crucial for designing secure protocols that resist exploitation. Challenges like "Selfie" provide valuable insights into these attacks while emphasizing the importance of secure governance mechanisms.
                </p>
            </div>
        </div>
    );
};

export default FlashLoansBlog;