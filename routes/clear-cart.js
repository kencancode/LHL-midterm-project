
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


