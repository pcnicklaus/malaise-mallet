router.post('/mail', function (req, res, next) {

    // console.log(' req.body.title   ', req.body.title[0].description)
    var text = req.body.jobs;
    var email = JSON.stringify(req.body.email);

    var emailMessage = '';
    for (var i = 0; i < text.length; i++) {
      emailMessage += '<br> Title:' + text[i].title + '<br> Description:' + text[i].description + '<br>Link:' + text[i].url + '<br>';
    }
    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'techjobbing@gmail.com',
            pass: process.env.GOOGLE
        }
    });

      var mailOptions = {
        from: 'Patrick ✔ <techjobbing@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Your Jobs ✔', // Subject line
        text: emailMessage, // plaintext body
        html: '<b>' + emailMessage + ' ✔</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

});
