var express = require('express');
var path = require('path');
var app = express();

var publicDir = path.join(__dirname,'/public');
app.use('/static', express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'searchflight.html'));
});
app.get('/displayFlight.html',function (req,res){
  res.sendFile(path.join(__dirname,'displayFlight.html'));
});
app.listen(3000, function(){
  console.log('Server started at port 3000');
});
