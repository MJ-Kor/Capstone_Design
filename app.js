var express = require('express');
var app = express();

app.use(express.static("views"));

//app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req,res){
  //res.render("pages/start");
  res.render("pages/start");
});

app.get('/pages/fit.html', function(req,res){
  res.render("pages/fit");
})

app.get('/pages/squat.html', function(req,res){
  res.render("pages/squat");
})

app.get('/pages/start.html', function(req,res){
  res.render("pages/start");
})


app.listen(3000, function(){
  console.log('App Listening on port 3000');
});