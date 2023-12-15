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
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    await knex(imageTable).insert(body);
    res.status(201).send({ message: "新規登録完了" });
  } catch (error) {
    res.status(500).send({ error: `error:${error}` });
  }
});

module.exports = router;
