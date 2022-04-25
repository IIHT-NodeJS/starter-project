var http = require('http');
var uc = require('upper-case');
// var page = ` <div> <h1>Registration form</h1>
// <br/>
// <input type='text' placeholder='enter your name'/> 
// <br/>
// <input type='text' placeholder='enter your age'/>
// <br/>
// <button>submit button </button> 
//  </div>`
http.createServer(function(req , res) {
    res.write(uc.upperCase(" welcome to node web page"));
    res.end();
}).listen(4000)