/**
 * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.
 */

// if (!process.env.PINECONE_INDEX_NAME) {
//   throw new Error('Missing Pinecone index name in .env file');
// }

const PINECONE_INDEX_NAME = 'ifrs-v1';

const PINECONE_NAME_SPACE = 'demo'; //namespace is optional for your vectors

export { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE };
