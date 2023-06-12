const server = require('./server');
const connectDB = require('./utils/db');

connectDB().then(() => {
  server.listen().then(({ url }) => {
    console.log(`Server listening at ${url}`);
  });
});
