const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./config/mongoose.config');
require('./controllers/player.routes')(app);

app.listen(8000, console.log('Listening on port: 8000'));