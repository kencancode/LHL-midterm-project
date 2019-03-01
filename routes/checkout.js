//how to add items to cart and list them on a checkout page
//save cart data in session or cookie

"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {
  router.post("/checkout", (req, res) =>{

  })

  router.get("/cart", (req, res) =>{
    res.render("cart", {});
  })

  return router;
}


