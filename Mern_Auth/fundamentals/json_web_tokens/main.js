const jwt = require('jsonwebtoken');

const payload = {
    id: "12345",
};

const userToken = jwt.sign(payload, process.env.SECRET_KEY)