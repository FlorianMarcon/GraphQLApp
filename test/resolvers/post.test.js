const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { typeDefs, resolvers } = require('../../src/server'); // Update the import statement

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { query, mutate } = createTestClient(server);

beforeAll(async () => {
  await mongoose.connect(process.env.TEST_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Query: posts', () => {
  it('should return an array of posts', async () => {
    const { data } = await query({ query: '{ posts { title } }' });

    expect(data.posts).toBeDefined();
    expect(data.posts.length).toBeGreaterThan(0);
  });
});

describe('Mutation: createPost', () => {
  it('should create a new post', async () => {
    const { data } = await mutate({
      mutation: 'mutation ($title: String!, $content: String!) { createPost(title: $title, content: $content) { title } }',
      variables: { title: 'Test Post', content: 'Test content' },
    });

    expect(data.createPost.title).toBe('Test Post');
  });
});

// Additional test cases for updatePost and deletePost can be added similarly
