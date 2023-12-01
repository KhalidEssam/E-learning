const mongoose = require('mongoose')

//connect to db

const connectDB = async () => {

    await mongoose.connect(process.env.MONG_URI)
        .then(() => {
            console.log('connected to db');
        })
        .catch(err => {
            console.log(err);
        })

}



module.exports = connectDB;