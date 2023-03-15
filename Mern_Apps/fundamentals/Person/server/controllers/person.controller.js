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

module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.json(err));
}

module.exports.deletePerson = (req, res) => {
    Person.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}