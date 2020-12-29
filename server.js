
var express = require('express');
var appApi = express();
appApi.disable('x-powered-by');

var bodyParser = require('body-parser');


appApi.use(bodyParser.urlencoded({extended: true}));
appApi.use(bodyParser.json());

var port = process.env.PORT || 8080;


// Create the Routes
var router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'Api Running'});
});

appApi.use('/api', router);

appApi.listen(port);
console.log('Server started on Port ' + port);

var mongoose = require('mongoose');
mongoose.connect('mongodb://root:password@127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
    .then(() => console.log('Connected to Mongo Db'))
    .catch((err) => console.log('FAILED TO CONNECT TO MONGODB: '  + err));
