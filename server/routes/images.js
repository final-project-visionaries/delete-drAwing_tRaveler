//("express").Router()を呼び出し
const router = require("express").Router();
const knex = require("../knexIndex");
const imageTable = "images";

router.get("/", async (req, res) => {
  try {
    const getAllData = await knex(imageTable).select(
      "id",
      "image_name",
      "image_data",
      "updated_at"
    );
    res.status(200).send(getAllData);
  } catch (error) {
    res.status(500).send({ error: `error:${error}` });
  }
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`/api/v1/images/:id のルーティングができたよ${id}`);
});

module.exports = router;
