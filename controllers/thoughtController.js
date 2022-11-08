const { Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    createThoughts(req, res) {
        Thought.create(req.body)
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    updateThoughts(req, res) {
        Thought.findOneAndUpdate({_id: req.params.id}, req.body) //ObjectId()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    deleteThoughts(req, res) {
        Thought.findOneAndDelete({_id: req.params.id}) //ObjectId()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    }
};