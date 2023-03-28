const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./config/mongoose.config');
require('./routes/store.routes')(app);

app.listen(8000, console.log('Listening on port: 8000'));