const mongoose = require("mongoose");
const UserSchema = require("../models/UserModel");
const NodeCache = require("node-cache");
const Cache = new NodeCache();
const CACHE_KEY_USERS = "allUsers";
const multer = require('multer');
const path = require('path');



//get all Users
const getAllUsers = async (req, res) => {
    try {
        //check if there are any users in the cache
        const cachedUsers = Cache.get(CACHE_KEY_USERS);
        if (cachedUsers) {
            console.log('Users retrieved from Cache');
            return res.status(200).json(cachedUsers);
        }
        // If data is not in the cache, simulate a delay of 10 seconds
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating 10-second delay

        // If data is not on the cache
        const Users = await UserSchema.find();
        Cache.set(CACHE_KEY_USERS, Users, 10);
        console.log('Users retrieved from MongoDB');
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
});



const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// POST route to handle image upload
const uploadImage = async (req, res) => {
    try {
        const { userEmail } = req.body;
        console.log(req.body); // Assuming you have a userId to associate with the uploaded image
        const imagePath = req.file.path; // File path where the image is saved

        // const User = await UserSchema.findOne({ email: userId });
        // Update the user's profileImage field with the file path
        await User.findOneeAndUpdate({ email: userEmail }, { profileImage: imagePath }); // Assuming you have a userId (userId, { profileImage: imagePath });

        res.status(200).send('Image uploaded and user updated successfully.');
    } catch (error) {
        res.status(500).send('Error uploading image: ' + error.message);
    }
};

//get a single User by email
const getUser = async (req, res) => {
    try {
        const User = await UserSchema.findById(req.params.id);
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get a single User by email
const getUserByEmail = async (req, res) => {
    try {
        const User = await UserSchema.findOne({ email: req.params.email });
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create a User
const createUser = async (req, res) => {
    try {
        // console.log(req.body);
        const newUser = new UserSchema(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update a User

const updateUser = async (req, res) => {
    //when update validate that the rule is one of the enums
    const validEnums = ['admin', 'teacher', 'student']; // replace with your actual enum values

    const { role } = req.body;
    if (!validEnums.includes(role)) {
        return res.status(400).json({ message: 'Invalid rule value' });
    }
    try {
        const updatedUser = await UserSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete a User

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserSchema.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//export controllers
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser,
    getUserByEmail,
    uploadImage
};
