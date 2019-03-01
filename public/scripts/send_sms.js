const accountSid = 'AC56f85866c3068afcd9e0d59604c94827';
const authToken = 'ffc9ef1254a8fba6d1a3a62bc6c599fc';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12048175572',
     to: '+16475503849'
   })
  .then(message => console.log(message.sid));