const router = require('express').Router();

const {
    getThoughts,
    updateThoughts,
    createThoughts,
    deleteThoughts
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThoughts);
router.route('/:id').put(updateThoughts).delete(deleteThoughts);

module.exports = router;
