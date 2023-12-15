//("express").Router()を呼び出し
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("/api/v1/images のルーティングができたよ");
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`/api/v1/images/:id のルーティングができたよ${id}`);
});

module.exports = router;
