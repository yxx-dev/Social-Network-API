const { User } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    createUsers(req, res) {
        User.create(req.body)
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    updateUsers(req, res) {
        User.findOneAndUpdate({username: req.params.username}, req.body)
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    deleteUsers(req, res) {
        User.findOneAndDelete({username: req.params.username})
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    }
};