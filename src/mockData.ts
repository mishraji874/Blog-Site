export const mockBlogs = [
    {
        id: 1,
        title: "Introduction to Web3",
        excerpt: "Learn the basics of decentralized systems and blockchain technology.",
        imageUrl: "https://via.placeholder.com/400?text=Web3",
        content:
            "Web3 represents the next generation of the internet, powered by blockchain technology. It enables decentralized applications (dApps) and peer-to-peer interactions without intermediaries...",
    },
    {
        id: 2,
        title: "Building Your First dApp",
        excerpt: "A step-by-step guide to creating your first decentralized application.",
        imageUrl: "https://via.placeholder.com/400?text=dApp",
        content:
            "Decentralized applications (dApps) are built on blockchain networks like Ethereum. In this tutorial, we'll walk through the process of building a simple dApp using Solidity and React...",
    },
    {
        id: 3,
        title: "Smart Contract Security",
        excerpt: "Best practices for writing secure smart contracts.",
        imageUrl: "https://via.placeholder.com/400?text=Security",
        content:
            "Smart contract security is critical to prevent vulnerabilities and exploits. In this article, we'll cover common pitfalls and best practices for writing secure smart contracts...",
    },
    {
        id: 4,
        title: "Scaling Web Applications",
        excerpt: "Techniques for building scalable web platforms.",
        imageUrl: "https://via.placeholder.com/400?text=Scaling",
        content:
            "Scalability is essential for handling increased traffic and user demand. Learn how to design and deploy scalable web applications using cloud technologies and microservices...",
    },
    {
        id: 5,
        title: "DevOps for Developers",
        excerpt: "Streamline your development workflow with DevOps tools.",
        imageUrl: "https://via.placeholder.com/400?text=DevOps",
        content:
            "DevOps bridges the gap between development and operations. This article explores tools like Docker, Kubernetes, and CI/CD pipelines to improve your development workflow...",
    },
    {
        id: 6,
        title: "Frontend Optimization Tips",
        excerpt: "Improve performance and user experience in your frontend projects.",
        imageUrl: "https://via.placeholder.com/400?text=Frontend",
        content:
            "Optimizing your frontend can significantly enhance user experience. Learn techniques like lazy loading, code splitting, and caching to boost performance...",
    },
];

export const addBlog = (newBlog: any) => {
    mockBlogs.push(newBlog);
};