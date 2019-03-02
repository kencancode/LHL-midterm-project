
exports.seed = async function(knex, Promise) {
  await knex.raw('truncate customers cascade')
  await knex.raw('truncate orders cascade')
  await knex.raw('truncate items cascade')

  let customer1 = await knex('customers').insert({
    id: 1,
    username: 'Monster',
    email: 'cookiemonster@example.com',
    phone: '1234567890',
  });
  let customer2 = await knex('customers').insert({
    id: 2,
    username: 'Elmo',
    email: 'elmo@example.com',
    phone: '2234567890',
  });
  let customer3 = await knex('customers').insert({
    id: 3,
    username: 'Oscar',
    email: 'oscar@example.com',
    phone: '2134567890',
  });

  return Promise.all([
    // Inserts seed entries for customers table

    // Inserts seed entries for orders table
    knex('orders').insert({
      username: 'Monster',
      checkout: true,
      customer_id: customer1.id,
    }),
    knex('orders').insert({
      username: 'Elmo',
      checkout: true,
      customer_id: customer2.id,

    }),
    knex('orders').insert({
      username: 'Oscar',
      checkout: true,
      customer_id: customer3.id,
    }),
    // Inserts seed entries for items table
    knex('items').insert({
      item_name: 'Spicy Salmon Roll',
      price: '11.00',
      image: 'TESTING'
    }),
    knex('items').insert({
      item_name: 'Philadelphia Roll',
      price: '11.00',
    }),
    knex('items').insert({
      item_name: 'Tuna Nigiri',
      price: '12.00',
    }),
    knex('items').insert({
      item_name: 'Veggie Roll',
      price: '9.00',
    }),
    knex('items').insert({
      item_name: 'Chicken Teriyaki',
      price: '14.00',
    }),
    knex('items').insert({
      item_name: 'Dynamite Roll',
      price: '13.00',
    }),
    knex('items').insert({
      item_name: 'Shrimp Tempura',
      price: '8.00',
    }),
    knex('items').insert({
      item_name: 'Edamame',
      price: '7.00',
    }),
    knex('items').insert({
      item_name: 'Pork Gyoza',
      price: '9.00',
    }),
    knex('items').insert({
      item_name: 'White Fish Sashimi',
      price: '12.00',
    }),
    knex('items').insert({
      item_name: 'Dragon Roll',
      price: '13.00',
    }),
    knex('items').insert({
      item_name: 'Shitake Udon',
      price: '14.00',
    }),
  ]);
};
