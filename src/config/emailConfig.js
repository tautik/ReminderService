const nodemailer = require("nodemailer");

//took the email id and password stored in serverConfig
const { EMAIL_ID, EMAIL_PASS } = require("./serverConfig");
console.log(EMAIL_ID, EMAIL_PASS);

//To send an email, we first create a transporter:
const sender = nodemailer.createTransport({
  service: "Gmail", //using gmail service
  auth: {
    //to send reminder using which mail id:
    user: EMAIL_ID,
    pass: EMAIL_PASS,
  },
});

module.exports = sender;
