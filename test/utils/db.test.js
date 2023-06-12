const mongoose = require('mongoose');
const connectDB = require('../../src/utils/db');

describe('Database connection', () => {
  it('should connect to the database', async () => {
    jest.setTimeout(10000); // Extend the default timeout for connecting to MongoDB

    await connectDB();

    expect(mongoose.connection.readyState).toBe(1);
  });
});
