require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
console.log('Port value:', port); // Debug line
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});