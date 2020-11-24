const sgMail = require("@sendgrid/mail")

const sendgridAPIKey 

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: "jmorales113@gmail.com",
    from: "jmorales113@gmail.com",
    subject: "This is my first creation!",
    text: "I hope this one actually gets to you."
})