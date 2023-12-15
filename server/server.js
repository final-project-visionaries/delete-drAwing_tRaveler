const express = require("express");
//routesフォルダのindex.jsファイルを呼び出し
const apiRoutes = require("./routes");

const setupServer = () => {
  //expressをインスタンス化
  const app = express();
  //JSON形式として認識する
  app.use(express.json());

  //"/api/v1"に飛んできたらapiRoutesファイルに飛んでいく
  app.use("/api/v1", apiRoutes);
  return app;
};
module.exports = { setupServer };
