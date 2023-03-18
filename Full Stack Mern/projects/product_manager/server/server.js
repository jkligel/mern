const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./config/product.config');
require('./routes/product.routes')(app);

app.listen(8000, console.log("Listening on port: 8000"));