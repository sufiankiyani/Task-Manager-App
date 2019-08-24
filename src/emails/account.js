const sgMail = require ('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email ,
        from : 'admin@task-man.app' ,
        Subject : 'Thanks for joining in' ,
        text: `Welcome to the Task-Man App, ${name}. Let me know how you get along with App.`
    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email ,
        from : 'admin@task-man.app' ,
        Subject : 'We will miss you at Task-Man App' ,
        text: `Dear, ${name} We will miss you a lot at Task-Man App. Let me know why you left so we can improver user exprince.`
    })
}


module.exports = {
    sendWelcomeEmail ,
    sendGoodByeEmail
}