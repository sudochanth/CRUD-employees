const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 7000;

const Employee = require('./routes/EmployeeRoutes');

app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/employees', {useNewUrlParser: true})
  .then( () => console.log(`connected to mongodb on port ${PORT}!!`))
  .catch(err => console.log(err))

app.use("/employees", Employee);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});

