
exports.up = async function(knex, Promise) {
   return knex.schema.alterTable('items', function(table) {
      table.string('image');
    });
};

exports.down = async function(knex, Promise) {
   return knex.schema.dropColumn('items');
};
