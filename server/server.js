const express = require("express");

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello! node");
  });
  return app;
};
module.exports = { setupServer };
