

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
      image: 'https://images.unsplash.com/photo-1534817557314-c781397d0b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
    }),
    knex('items').insert({
      item_name: 'Philadelphia Roll',
      price: '11.00',
      image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }),
    knex('items').insert({
      item_name: 'Tuna Nigiri',
      price: '12.00',
      image: 'https://images.unsplash.com/photo-1473269712320-f24ce5aa6e5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
    }),
    knex('items').insert({
      item_name: 'Veggie Roll',
      price: '9.00',
      image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80'
    }),
    knex('items').insert({
      item_name: 'Chicken Teriyaki',
      price: '14.00',
      image: 'https://images.unsplash.com/photo-1511344407683-b1172dce025f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
    }),
    knex('items').insert({
      item_name: 'Dynamite Roll',
      price: '13.00',
      image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80'
    }),
    knex('items').insert({
      item_name: 'Shrimp Tempura',
      price: '8.00',
      image: 'https://images.unsplash.com/photo-1479832793815-b9be4c77023e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }),
    knex('items').insert({
      item_name: 'Edamame',
      price: '7.00',
      image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
    }),
    knex('items').insert({
      item_name: 'Pork Gyoza',
      price: '9.00',
      image: 'https://images.unsplash.com/photo-1532719880791-ea2b56fdfa87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }),
    knex('items').insert({
      item_name: 'White Fish Sashimi',
      price: '12.00',
      image: 'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }),
    knex('items').insert({
      item_name: 'Dragon Roll',
      price: '13.00',
      image: 'https://images.unsplash.com/photo-1534476429-dc25f72aa33b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }),
    knex('items').insert({
      item_name: 'Shitake Udon',
      price: '14.00',
      image: 'https://images.unsplash.com/photo-1490052048947-f6d652c8512a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }),
  ]);
};

// exports.seed = async function(knex, Promise) {
//   await knex.raw('truncate customers cascade')
//   await knex.raw('truncate orders cascade')
//   await knex.raw('truncate items cascade')

//   let customer1 = await knex('customers').insert({
//     id: 1,
//     username: 'Monster',
//     email: 'cookiemonster@example.com',
//     phone: '1234567890',
//   });
//   let customer2 = await knex('customers').insert({
//     id: 2,
//     username: 'Elmo',
//     email: 'elmo@example.com',
//     phone: '2234567890',
//   });
//   let customer3 = await knex('customers').insert({
//     id: 3,
//     username: 'Oscar',
//     email: 'oscar@example.com',
//     phone: '2134567890',
//   });

//   return Promise.all([

//     knex('orders').insert({
//       username: 'Monster',
//       checkout: true,
//       customer_id: customer1.id,
//     }),
//     knex('orders').insert({
//       username: 'Elmo',
//       checkout: true,
//       customer_id: customer2.id,

//     }),
//     knex('orders').insert({
//       username: 'Oscar',
//       checkout: true,
//       customer_id: customer3.id,
//     }),
//     // Inserts seed entries for items table
//     knex('items').insert({
//       item_name: 'Spicy Salmon Roll',
//       price: '11.00',
//       image: 'TESTING'
//     }),
//     knex('items').insert({
//       item_name: 'Philadelphia Roll',
//       price: '11.00',
//     }),
//     knex('items').insert({
//       item_name: 'Tuna Nigiri',
//       price: '12.00',
//     }),
//     knex('items').insert({
//       item_name: 'Veggie Roll',
//       price: '9.00',
//     }),
//     knex('items').insert({
//       item_name: 'Chicken Teriyaki',
//       price: '14.00',
//     }),
//     knex('items').insert({
//       item_name: 'Dynamite Roll',
//       price: '13.00',
//     }),
//     knex('items').insert({
//       item_name: 'Shrimp Tempura',
//       price: '8.00',
//     }),
//     knex('items').insert({
//       item_name: 'Edamame',
//       price: '7.00',
//     }),
//     knex('items').insert({
//       item_name: 'Pork Gyoza',
//       price: '9.00',
//     }),
//     knex('items').insert({
//       item_name: 'White Fish Sashimi',
//       price: '12.00',
//     }),
//     knex('items').insert({
//       item_name: 'Dragon Roll',
//       price: '13.00',
//     }),
//     knex('items').insert({
//       item_name: 'Shitake Udon',
//       price: '14.00',
//     }),
//   ]);
// };
