/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("images").del();
  await knex("images").insert([
    {
      image_name: "パンダさん",
      image_data: "data:image/png;base64,iVBORw0KGgoAAAANSU5ErkJggg1",
    },
    {
      image_name: "バイソンさん",
      image_data: "data:image/png;base64,iVBORw0KGgoAAAANSU5ErkJggg2",
    },
    {
      image_name: "ライオンさん",
      image_data: "data:image/png;base64,iVBORw0KGgoAAAANSU5ErkJggg3",
    },
  ]);
};
