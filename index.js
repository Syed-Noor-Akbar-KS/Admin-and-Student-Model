const express = require ('express');
const {db} = require ('./model/index.js');
const app = express ();
const port = 3000;

app.use (express.json ());

const admin = require ('./route/adminRoutes.js');

app.get ('/', (req, res) => {
  res.send ('Hello world!');
});

db.sequelize
  .sync ({alert: true})
  .then (() => {
    app.listen (port, () => {
      console.log (`Example app listening on port ${port}`);
    });
  })
  .catch (err => {
    console.log ('Erorr: ', err);
  });

// app.listen (port, () => {
//   console.log (`Example app listening on port ${port}`);
// });

app.use (admin);
