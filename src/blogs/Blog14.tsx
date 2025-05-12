import React, { useEffect } from "react";

const GetProgramAccountsBlog: React.FC = () => {
    useEffect(() => {
        document.title = "Understanding getProgramAccounts RPC Method Using TypeScript | Aditya Mishra";
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl">
                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Understanding getProgramAccounts RPC Method Using TypeScript
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
                    <span>Published on May 12, 2025</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                </div>

                {/* Featured Image */}
                <img
                    src="https://miro.medium.com/v2/resize:fit:1358/1*YOIQtfgKs4J4u6tvgYwLTQ.jpeg"
                    alt="Understanding getProgramAccounts RPC Method"
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    An RPC method that returns all accounts owned by a program. Currently pagination is not supported. Requests to getProgramAccounts should include the dataSlice and/or filters parameters to improve response time and return only intended results.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">getProgramAccounts RPC Method</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The <strong>getProgramAccounts</strong> RPC method has the following syntax:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>programId: string</strong> - <strong>Pubkey of the program to query</strong>, provided as a base58 encoded string.</li>
                    <li><strong>(optional) configOrCommitment: object</strong> - Configuration parameters containing the following optional fields:
                        <ul className="list-disc list-inside ml-6">
                            <li><strong>(optional) commitment: string</strong> - <strong>State commitment</strong>.</li>
                            <li><strong>(optional) encoding: string</strong> - <strong>Encoding for account data</strong>, either: base58, base64, or jsonParsed. <strong>Note:</strong> web3js users should instead use getParsedProgramAccounts.</li>
                            <li><strong>(optional) dataSlice: object</strong> - <strong>Limit the returned account data</strong> based on:
                                <ul className="list-disc list-inside ml-6">
                                    <li><strong>offset: number</strong> - Number of bytes into account data to begin returning.</li>
                                    <li><strong>length: number</strong> - Number of bytes of account data to return.</li>
                                </ul>
                            </li>
                            <li><strong>(optional) filters: array</strong> - <strong>Filter results</strong> using the following filter objects:
                                <ul className="list-disc list-inside ml-6">
                                    <li><strong>memcmp: object</strong> - <strong>Match a series of bytes to account data</strong>:
                                        <ul className="list-disc list-inside ml-6">
                                            <li><strong>offset: number</strong> - Number of bytes into account data to begin comparing.</li>
                                            <li><strong>bytes: string</strong> - Data to match, as base58 encoded string <strong>limited to 129 bytes</strong>.</li>
                                        </ul>
                                    </li>
                                    <li><strong>dataSize: number</strong> - <strong>Compares the account data length</strong> with the provided data size.</li>
                                </ul>
                            </li>
                            <li><strong>(optional) withContext: boolean</strong> - <strong>Wrap the result</strong> in an RpcResponse JSON object.</li>
                        </ul>
                    </li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Response</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    By default <strong>getProgramAccounts</strong> will return an array of JSON objects with the following structure:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>pubkey: string</strong> - <strong>The account pubkey</strong> as a base58 encoded string.</li>
                    <li><strong>account: object</strong> - A JSON object, with the following sub fields:
                        <ul className="list-disc list-inside ml-6">
                            <li><strong>lamports: number</strong> - Number of lamports assigned to the account.</li>
                            <li><strong>owner: string</strong> - The base58 encoded pubkey of the program the account has been assigned to.</li>
                            <li><strong>data: string | object</strong> - Data associated with the account, either as encoded binary data or JSON format depending on the provided encoding parameter.</li>
                            <li><strong>executable: boolean</strong> - Indication if the account contains a program.</li>
                            <li><strong>rentEpoch: number</strong> - The epoch at which this account will next owe rent.</li>
                        </ul>
                    </li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Deep Dive</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    getProgramAccounts is a versatile RPC method that returns all accounts owned by a program. We can use getProgramAccounts for a number of useful queries, such as finding:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>All token accounts for a particular wallet</li>
                    <li>All token accounts for a particular mint (i.e. All JUP holders)</li>
                    <li>All custom accounts for a particular program (i.e. All Mango users)</li>
                </ul>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Despite its usefulness, <strong>getProgramAccounts</strong> is often misunderstood due to its current constraints. Many of the queries supported by getProgramAccounts require RPC nodes to scan large sets of data. These scans are both memory and resource intensive. As a result, calls that are too frequent or too large in scope can result in connection timeouts. Furthermore, at the time of this writing, the getProgramAccounts endpoint does not support pagination. If the results of a query are too large, the response will be truncated.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    To get around these current constraints, <strong>getProgramAccounts</strong> offers a number of useful parameters: namely, dataSlice and the filters options memcmp and dataSize. By providing combinations of these parameters, we can reduce the scope of our queries down to manageable and predictable sizes.
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Filters</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The most common parameter to use with getProgramAccounts is the filters array. This array accepts two types of filters, dataSize and memcmp. Before using either of these filters, we should be familiar with how the data we are requesting is laid out and serialized.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">dataSize</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    In the case of the Token Program, we can see that token accounts are 165 bytes in length. Specifically, a token account has eight different fields, with each field requiring a predictable number of bytes. We can visualize how this data is laid out using the below illustration.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">memcmp</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The memcmp filter, or "memory comparison" filter, allows us to compare data at any field stored on our account. Specifically, we can query only for accounts that match a particular set of bytes at a particular position. memcmp requires two arguments:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>offset:</strong> the position at which to begin comparing data. This position is measured in bytes and is expressed as an integer.</li>
                    <li><strong>bytes:</strong> the data that should match the account's data. This is represented as a base-58 encoded string should be limited to less than 129 bytes.</li>
                </ul>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    It's important to note that memcmp will only return results that are an exact match on bytes. Currently, it does not support comparisons for values that are less than or greater than the bytes we provide.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Example Query</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We can invoke this query via the following example:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
                    <code>{`import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";

(async () => {
  const MY_WALLET_ADDRESS = "88Jrm9g9bGv5PWd1ZcSS8egvCNyhMAc1MJtxcmAqQu7e";
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const accounts = await connection.getParsedProgramAccounts(
    TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    {
      filters: [
        {
          dataSize: 165, // number of bytes
        },
        {
          memcmp: {
            offset: 32, // number of bytes
            bytes: MY_WALLET_ADDRESS, // base58 encoded string
          },
        },
      ],
    },
  );

  console.log(
    \`Found \${accounts.length} token account(s) for wallet \${MY_WALLET_ADDRESS}: \`,
  );
  accounts.forEach((account, i) => {
    console.log(
      \`-- Token Account Address \${i + 1}: \${account.pubkey.toString()} --\`,
    );
    console.log(\`Mint: \${account.account.data["parsed"]["info"]["mint"]}\`);
    console.log(
      \`Amount: \${account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}\`,
    );
  });
})();`}</code>
                </pre>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The output should look like:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
                    <code>{`Found 2 token account(s) for wallet 88Jrm9g9bGv5PWd1ZcSS8egvCNyhMAc1MJtxcmAqQu7e:
-- Token Account Address 0:  H12yCcKLHFJFfohkeKiN8v3zgaLnUMwRcnJTyB4igAsy --
Mint: CKKDsBT6KiT4GDKs3e39Ue9tDkhuGUKM3cC2a7pmV9YK
Amount: 1
-- Token Account Address 1:  Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb --
Mint: BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf
Amount: 3`}</code>
                </pre>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">dataSlice</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Outside of the two filter parameters, the third most common parameter for getProgramAccounts is dataSlice. Unlike the filters parameter, dataSlice will not reduce the number of accounts returned by a query. Instead, dataSlice will limit the amount of data for each account.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Much like memcmp, dataSlice accepts two arguments:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li><strong>offset:</strong> The position (in number of bytes) at which to begin returning account data</li>
                    <li><strong>length:</strong> The number of bytes which should be returned</li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    dataSlice is particularly useful when we run queries on a large dataset but don't actually care about the account data itself. An example of this would be if we wanted to find the number of token accounts (i.e. number of token holders) for a particular token mint.
                </p>

                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
                    <code>{`import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";

(async () => {
  const MY_TOKEN_MINT_ADDRESS = "BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf";
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const accounts = await connection.getProgramAccounts(
    TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    {
      dataSlice: {
        offset: 0, // number of bytes
        length: 0, // number of bytes
      },
      filters: [
        {
          dataSize: 165, // number of bytes
        },
        {
          memcmp: {
            offset: 0, // number of bytes
            bytes: MY_TOKEN_MINT_ADDRESS, // base58 encoded string
          },
        },
      ],
    },
  );
  console.log(
    \`Found \${accounts.length} token account(s) for mint \${MY_TOKEN_MINT_ADDRESS}\`,
  );
  console.log(accounts);
})();`}</code>
                </pre>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The output should look like (notice the empty &lt;Buffer &gt; at account.data):
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
                    <code>{`Found 3 token account(s) for mint BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf
  [
    {
      account: {
        data: <Buffer >,
        executable: false,
        lamports: 2039280,
        owner: [PublicKey],
        rentEpoch: 228
      },
      pubkey: PublicKey {
        _bn: <BN: a8aca7a3132e74db2ca37bfcd66f4450f4631a5464b62fffbd83c48ef814d8d7>
      }
    },
    {
      account: {
        data: <Buffer >,
        executable: false,
        lamports: 2039280,
        owner: [PublicKey],
        rentEpoch: 228
      },
      pubkey: PublicKey {
        _bn: <BN: ce3b7b906c2ff6c6b62dc4798136ec017611078443918b2fad1cadff3c2e0448>
      }
    },
    {
      account: {
        data: <Buffer >,
        executable: false,
        lamports: 2039280,
        owner: [PublicKey],
        rentEpoch: 228
      },
      pubkey: PublicKey {
        _bn: <BN: d4560e42cb24472b0e1203ff4b0079d6452b19367b701643fa4ac33e0501cb1>
      }
    }
  ]`}</code>
                </pre>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    By combining all three parameters (dataSlice, dataSize, and memcmp) we can limit the scope of our query and efficiently return only the data we're interested in.
                </p>
            </div>
        </div>
    );
};

export default GetProgramAccountsBlog;