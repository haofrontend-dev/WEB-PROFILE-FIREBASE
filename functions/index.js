const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.https.onCall((data, context) => {
  const email = data.email;
  const subject = data.subject;
  const message = data.message;

  const mailOptions = {
    from: gmailEmail,
    to: email,
    subject: subject,
    text: message,
  };

  return mailTransport
    .sendMail(mailOptions)
    .then(() => {
      console.log("Mail sent to:", email);
      return { message: "Mail sent successfully!" };
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      return { error: error };
    });
});
