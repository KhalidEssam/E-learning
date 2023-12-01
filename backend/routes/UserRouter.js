const express = require('express');
const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser,
    getUserByEmail
} = require('../controllers/UserControllers');
const bcrypt = require('bcrypt');

const User = require('../models/UserModel');
const { registerRules, loginRules, validation } = require("../middleware/validator");
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
router.post('/login', async (req, res) => {
    // return res.status(200).send({ msg: "success" })

    // console.log(req.body);
    const { email, password } = req.body;
    try {
        //find if the user exist
        const searchedUser = await User.findOne({ email });

        // if the email not exist
        if (!searchedUser) return res.status(400).send({ msg: "bad Credential" });
        // return res.status(200).send({ email: searchedUser.email, password: searchedUser.password, msg: 'match' });

        // password are equals
        const match = password === searchedUser.password
        // await bcrypt.compare(password, searchedUser.password);
        // return res.status(200).send({ email: searchedUser.email, password: searchedUser.password, msg: match });

        // res.status(200).send({ password: searchedUser.password, msg: "success" });
        if (!match) return res.send({ msg: "bad Credential" });
        // create token
        const payload = {
            _id: searchedUser._id,
        };
        // const token = await jwt.sign(payload, process.env.SecretOrKey, {
        //     expiresIn: 3600,
        // });

        //send the user
        res.status(200).send({ user: searchedUser, msg: "success", token: `Bearer ${payload._id}` });
    } catch (error) {
        res.status(500).send({ msg: "can not get the user" });
    }

})

module.exports = router;