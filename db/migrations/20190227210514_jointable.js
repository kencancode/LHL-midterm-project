
exports.up = function(knex, Promise) {
  return knex.schema.createTable("line_items", function(table) {
      table.integer("item_id").references("id").inTable("items");
      table.integer("order_id").references("id").inTable("orders");
      table.integer("quantity");
    });
};


exports.down = function(knex, Promise) {
   return knex.schema.dropTable("line_items")
};
