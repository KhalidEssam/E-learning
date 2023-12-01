//create express app
const express = require('express');
const app = express();
const cors = require('cors');


require('dotenv').config()


// these are the Routes
const CoursesRoutes = require('./routes/CoursesRouter');
const UserRoutes = require('./routes/UserRouter');

const dbConnect = require('./config/dbConnect');

dbConnect();


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
app.use('/api/users', UserRoutes);


app.listen(process.env.PORT, (err) =>
err ? console.log(err) : console.log(` server is running on ${process.env.PORT}` )
)