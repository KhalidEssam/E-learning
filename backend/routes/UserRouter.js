const express = require('express');
const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser,
} = require('../controllers/UserControllers');
const router = express.Router();
// get all Users
router.get('/', getAllUsers);
// get a single User
router.get('/:id', getUser);

// create a User
router.post('/Signup/', createUser);
// update a User
router.put('/:id', updateUser);
// delete a User
router.delete('/:id', deleteUser);

module.exports = router;