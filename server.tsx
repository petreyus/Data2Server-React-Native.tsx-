

const express = require('express');
// this enables me to parse the data that comes from the client
var bodyParser = require('body-parser');
// security package mainly so people can't see I am using express

const app = express();

app.use(bodyParser.json({
    limit: "10mb"
}));
app.use(bodyParser.urlencoded({
    limit: "10mb",
    extended: true
}));


// the below code allows me to send text not just json
// works with react native!
app.use(bodyParser.text());



// this is imporant to get rid of all the cross origin errors.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });








app.listen( 4000, function(){console.log("It is working");})

app.get('/', (req, res, next) => {
    res.sendFile('C:/Users/Captain/Desktop/HTML test project/reactapp/reactapp/index.html');
  
});

app.post('/', (req, res, next) => {
   
    
 
  // res.send("working");

 
 console.log(req.body);
 res.send(JSON.stringify("Reply from server working!"))
 //res.send(JSON.stringify("working"))
 
 
 // res.send({test: 'Working!'});

   // console.log(res.body);
  
    
});