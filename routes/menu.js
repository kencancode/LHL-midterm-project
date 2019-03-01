"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {

    knex.select().from('items').then((items) => {
      let templateVars = {
        items: items
      };
      res.render("menu", templateVars);
    })

  });

  //menu to receive request about orders
  router.post("/", (req, res) => {
    let templateVars = { username: users.id };  //receive data when users choose from menu
    res.render("menu", templateVars);
  });

  return router;
}

