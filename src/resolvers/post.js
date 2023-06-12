const Post = require('../models/Post');

const resolvers = {
  Query: {
    posts: async () => {
      try {
        return await Post.find();
      } catch (error) {
        throw new Error(error);
      }
    },
    post: async (_, { id }) => {
      try {
        return await Post.findById(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createPost: async (_, { title, content }) => {
      try {
        const post = new Post({ title, content });
        await post.save();
        return post;
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePost: async (_, { id, title, content }) => {
      try {
        return await Post.findByIdAndUpdate(
          id,
          { title, content },
          { new: true }
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    deletePost: async (_, { id }) => {
      try {
        await Post.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
