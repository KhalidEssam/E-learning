// const express = require('express');
const nodemailer = require('nodemailer');

// const app = express();

// Create a transporter using your email service provider's SMTP settings
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khaledesam384@gmail.com', // Your email address
        pass: 'zsrv ulwn rmqi mwnc' // Your password (for Gmail, you might need an App Password)
    }
});


const sendEmail = async (req, res) => {
    // Email content
    let mailOptions = {
        from: 'khaledesam384@gmail.com', // Sender email address
        to: 'khaled.esam@msa.edu.eg', // Receiver email address
        subject: 'Testing nodemailer', // Subject line
        text: 'that is man easy beasy!' // Plain text body
        // You can also use html key to send HTML formatted content
    };

    // Sending the email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email'); // Sending an error response if email sending fails
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!'); // Sending a success response
        }
    });
}


// // Define a route for sending an email
// app.get('/mail', (req, res) => {
//     // Email content
//     let mailOptions = {
//         from: 'khaledesam384@gmail.com', // Sender email address
//         to: 'khaled.esam@msa.edu.eg', // Receiver email address
//         subject: 'Testing nodemailer', // Subject line
//         text: 'Hello from nodemailer!' // Plain text body
//         // You can also use html key to send HTML formatted content
//     };

//     // Sending the email
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email'); // Sending an error response if email sending fails
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.send('Email sent successfully!'); // Sending a success response
//         }
//     });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

module.exports = {
    sendEmail,

}