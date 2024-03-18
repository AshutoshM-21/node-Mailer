const nodemailer = require('nodemailer');

const recipientEmail = 'recipient@example.com'; // Dynamic recipient email address
const username = 'DynamicUsername'; // Dynamic username
const password = 'DynamicPassword'; // Dynamic password
// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // e.g., smtp.gmail.com for Gmail
  port: 465, // e.g., 587 for Gmail with TLS
  secure: true, // true for 465 (SSL), false for other ports like 587 (TLS)
  auth: {
    user: 'ashutosh@gully2global.com', // Your email
    pass: 'Ashutosh@!23' // Your email account password or app password
  }
});

// Set up email data with unicode symbols
let mailOptions = {
  from: 'ashutosh@gully2global.com', // Sender address
  to: recipientEmail, // List of recipients
  subject: 'Account Verification Successful', // Subject line
  text: 'Congrats! Your account has been successfully verified', // Plain text body
  html: `<h1>Congrats! Your account has been successfully verified.</h1><p>Here are your credentials:</p><ul><li>Username: ${username}</li><li>Password: ${password}</li></ul>
  <img src="https://firebasestorage.googleapis.com/v0/b/golfapp-37b8c.appspot.com/o/users%2Fuploads%2FASC-EPTA-7%20(1).webp?alt=media&token=939c0668-43ed-42c8-94eb-c3bdd7b82313"/>`, // Include the image in HTML
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
