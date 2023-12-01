const express = require('express');
const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser,
    getUserByEmail
} = require('../controllers/UserControllers');
const router = express.Router();
// get all Users
router.get('/', getAllUsers);
// get a single User
router.get('/:id', getUser);

// get a single User by email
router.get('/email/:email', getUserByEmail);

// create a User
router.post('/Signup/', createUser);

// update a User
router.put('/:id', updateUser);
// delete a User
router.delete('/:id', deleteUser);
//Login
router.post('/login', (req, res) => {

})

module.exports = router;