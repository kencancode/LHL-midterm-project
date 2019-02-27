
exports.up = async function(knex, Promise) {
  await knex.schema.dropTable('users');
  await knex.raw('CREATE TABLE customers (id INT, username VARCHAR, email VARCHAR, phone INT, PRIMARY KEY(id))');

  await knex.raw('CREATE TABLE orders (id INT, username VARCHAR, checkout BIT, customer_id INTEGER REFERENCES customers(id), PRIMARY KEY(id))');

  return knex.raw('CREATE TABLE items (id INT, itemName VARCHAR, price INT)');
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('customers');
  await knex.schema.dropTable('orders');
  return knex.schema.dropTable('items');
};

//three drop table commands
//revert previous migration file
//

//   knex.raw(`
//   CREATE TABLE customers (
//     id INT,
//     user VARCHAR,
//     email VARCHAR,
//     phone INT,
//     PRIMARY KEY(user)
//   );

//   CREATE TABLE orders (
//     id INT,
//     user VARCHAR,
//     checkout BIT,
//     customer_id INTEGER REFERENCES customers(id)
//   );

//   CREATE TABLE items (
//     id INT,
//     itemName VARCHAR,
//     price INT,
// );`);
// };
