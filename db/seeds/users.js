exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Sam'}),
        knex('users').insert({id: 2, name: 'Ryan'}),
        knex('users').insert({id: 3, name: 'Ken'})
      ]);
    });
};
