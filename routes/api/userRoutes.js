const router = require('express').Router();

const {
    getUsers,
    updateUsers,
    createUsers,
    deleteUsers
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUsers);
router.route('/:username').put(updateUsers).delete(deleteUsers);

module.exports = router;
