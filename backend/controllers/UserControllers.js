const mongoose = require("mongoose");
const UserSchema = require("../models/UserModel");

//get all Users
const getAllUsers = async (req, res) => {
    try {
        const Users = await UserSchema.find();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get a single User
const getUser = async (req, res) => {
    try {
        const User = await UserSchema.findById(req.params.id);
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create a User
const createUser = async (req, res) => {
    try {
        console.log(req.body);
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
};