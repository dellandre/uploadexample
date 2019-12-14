const express = require ('express');
const bodyParder = require('body-parser');
const cors = require("cors");

const app = express();


app.use(cors());
app.use(bodyParder.json());
app.use(bodyParder.urlencoded({ extended: false}));

require('../controllers/authController')(app);

app.listen(3000);