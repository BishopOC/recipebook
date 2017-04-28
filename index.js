var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var userRouter = require('./routers/user.router.js');
var postRouter = require('./routers/post.router.js');
var categoryRouter = require('./routers/category.router.js');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').MONGOURI;

require('./config/passport');
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI);

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.use(userRouter);
server.use(postRouter);
server.use(categoryRouter);


server.listen(port, function(){
  console.log('Now listening on port', port);
});
