const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports like 587
  auth: {
    user: 'ashutosh@gully2global.com',
    pass: 'Ashutosh@!23'
  }
});

app.post('/send-email', (req, res) => {
  const { recipientEmail, username, password } = req.body;
  
  const mailOptions = {
    from: '"AscEpta" <ashutosh@gully2global.com>',
    to: recipientEmail,
    subject: 'Account Verification Successful',
    text: `Congrats! Your account has been successfully verified.`,
    html: `<h1>Congrats! Your account has been successfully verified.</h1><p>Here are your credentials:</p><ul><li>Username: ${username}</li><li>Password: ${password}</li></ul><p><img src="https://firebasestorage.googleapis.com/v0/b/golfapp-37b8c.appspot.com/o/users%2Fuploads%2FASC-EPTA-7%20(1).webp?alt=media&token=939c0668-43ed-42c8-94eb-c3bdd7b82313"/>`,
    
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
