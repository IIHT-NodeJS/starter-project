var http = require("http");
var uc = require("upper-case");
var nodeMailer = require("nodemailer");
var transport = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "ng.test88@gmail.com",
    pass: "Admin123%",
  },
});

var mailOptions = {
  from: "ng.test88@gmail.com",
  to: "ng.test88@gmail.com",
  subject: "test node mail",
  text: " this is the second mail that i am sending via node js",
};
transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.warn(error);
  } else {
    console.warn("email has been sent", info.response);
  }
});
// var page = ` <div> <h1>Registration form</h1>
// <br/>
// <input type='text' placeholder='enter your name'/>
// <br/>
// <input type='text' placeholder='enter your age'/>
// <br/>
// <button>submit button </button>
//  </div>`

// http.createServer(function(req , res) {
//     res.write(uc.upperCase(" welcome to node web page"));
//     res.end();
// }).listen(4000)
