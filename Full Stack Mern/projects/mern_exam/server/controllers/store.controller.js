const Store = require('../models/store.model');

module.exports.getAllStores = (req, res) => {
    Store.find()
        .then(stores => res.json(stores))
        .catch(err => res.status(400).json(err));
}

module.exports.createStore = (req, res) => {
    Store.create(req.body)
        .then(store => res.json(store))
        .catch(err => res.status(400).json(err));
}

module.exports.getStore = (req, res) => {
    Store.findOne({_id: req.params.id})
        .then(store => {
            res.json(store);            
        })
        .catch(err => res.status(400).json(err));
}

module.exports.updateStore = (req, res) => {
    Store.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedStore => res.json(updatedStore))
        .catch(err => res.status(400).json(err));
}


module.exports.deleteStore = (req, res) => {
    Store.deleteOne({_id: req.params.id})
        .then(deletedStore => res.json(deletedStore))
        .catch(err => res.status(400).json(err));
}