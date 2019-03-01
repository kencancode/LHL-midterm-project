
exports.up = function(knex, Promise) {
   knex.schema.alterTable("items", function(table) {
      table.string("image");
    });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('items');
}

