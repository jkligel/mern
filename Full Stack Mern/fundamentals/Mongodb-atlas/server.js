const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;
// Enter username and password below. Do not store it on GitHub
const MONGODBURI = 'mongodb+srv://<username>:<password>@cluster0.ax2hg.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(MONGODBURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB'));

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    age: {type: Number},
    isActive: {type: Boolean},
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

app.post('/api/users', (req, res) => {
    console.log(req.body);
    User.create(req.body)
        .then(newUser => res.status(201).json(newUser))
        .catch(err => res.status(500).json(err));
});

app.get('/', (req, res) => {
    User.find()
        .then(users => res.status(201).json(users))
        .catch(err => res.status(500).json(err));
});

app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)});