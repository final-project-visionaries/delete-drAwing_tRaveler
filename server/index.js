const { setupServer } = require("./server");
require("dotenv").config();
const port = process.env.PORT || 4242;
const server = setupServer();
server.listen(port, () => {
  console.log("server is running!");
});
