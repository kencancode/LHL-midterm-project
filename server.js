"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
// const usersRoutes = require("./routes/users");
const menuRoutes = require("./routes/menu");
const checkoutRoutes = require("./routes/checkout");

// twilio messaging serice
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});


//twilio funtion
const sendMessage = function(num){
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
     body: 'Your order is being prepared...it will be ready in 30 minutes',
     from: '+12048175572',
     to: '+18168245079'
   })
  .then(message => console.log(message.sid));
}

const orderConfirmation = function(num){
  const accountSid = 'AC56f85866c3068afcd9e0d59604c94827';
  const authToken = 'ffc9ef1254a8fba6d1a3a62bc6c599fc';
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
     body: 'Order received, get it ready...',
     from: '+12048175572',
     to: '+14168381807'
   })
  .then(message => console.log(message.sid));
}


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

app.use("/menu", menuRoutes(knex));
app.use("/checkout", checkoutRoutes(knex));

app.get('/clear-cart', (req, res) => {
  const templateVars = {
  clearall: true
}
  res.render('cart', templateVars);
});


const users = {
    id: "user1",
    email: "ryanandrew.sibat@gmail.com",
    password: "1",
    phone: "6475503849"
};


// Home page
app.get("/", (req, res) => {
let templateVars = { };
  res.render("homepage", templateVars);
});

app.get("/menu/checkout", (req, res) => {
let templateVars = {  };
  res.render("checkout", templateVars);
});


app.get("/menu/checkout/complete", (req, res) => {
let templateVars = {  };
  res.render("complete");
});


app.post("/menu/checkout/complete", (req, res) => {
// let templateVars = { };  //receive data when users confirm their order
var orders = {
  email: req.body.email,
  phone: req.body.phone
}
sendMessage();
orderConfirmation();
  res.redirect("/menu/checkout/complete");
});

app.post("/menu/checkout/delete", (req, res) => {
let templateVars = { };  //receive data when users delete orders
  res.render("checkout", templateVars);
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
