const Person = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello, World"
    });
}

module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
    Person.find()
        .then(persons => {
            console.log(persons);
            response.json(persons);
        })
        .catch(err => {
            console.log(err);
            response.json(err)
        })
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id: req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json(err));
}