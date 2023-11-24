
require('dotenv').config()
//create express app
const express = require('express');
const app = express();
// these are someedits
const cors = require('cors');
const CoursesRoutes = require('./routes/CoursesRouter');
const mongoose = require('mongoose');

//middlewares
app.use(express.json());
// explain the use of the middleware

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

//enable cors
app.use(cors());

//routes
app.use('/api/courses', CoursesRoutes);


//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        console.log('connected to db');
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log(err);
    })