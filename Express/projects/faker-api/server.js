const express = require("express");
const { createUser, createCompany } = require("./my_modules");

const app = express();
const port = 8000;

app.use( express.json() )
app.use( express.urlencoded({extended: true}) );

app.get('/api/users/new', (req, res) => {
    const user = createUser();

    res.json(user);
});

app.get('/api/companies/new', (req, res) => {
    const company = createCompany();

    res.json(company);
});

app.get('/api/user/company', (req, res) => {
    const company = createCompany();
    const user = createUser();

    res.json({user, company});
});

app.listen(port, () => `Listening on port ${port}`);