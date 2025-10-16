const nodemailer = require("nodemailer")
module.exports.sendEmail = async (msg) => {
  const transporter = nodemailer.createTransport({
    port: 587,
    service: "gmail",
    secure: false,
    auth: {
      user: "vitthanishubham@gmail.com",
      pass: "kmvseelhtmwzgwqv",
    },
  });
  let res = await transporter.sendMail(msg);
  return res;
}