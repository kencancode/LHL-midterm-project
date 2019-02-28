
exports.up = async function(knex, Promise) {
  await knex.schema.createTable("customers", function(table) {
      table.increments("id");
      table.string("username");
      table.string("email");
      table.string("phone");
    });
  await knex.schema.createTable("orders", function(table) {
      table.increments("id");
      table.string("username");
      table.boolean("checkout");
      table.integer("customer_id").references("id").inTable("customers");
    });
  return knex.schema.createTable("items", function(table) {
      table.increments("id");
      table.string("item_name");
      table.string("price");
    })
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('items');
  await knex.schema.dropTable('orders');
  return knex.schema.dropTable('customers');
};
