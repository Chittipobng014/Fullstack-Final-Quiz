var express = require('express');        
var app = express();   
var cors = require('cors');              
var bodyParser = require('body-parser');
var posts = require('./post.js');
var path = require('path');

// POINT 1. Enable CORS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }),cors());
app.use(bodyParser.json(),cors());

// POINT 2. Set a static file for “frontend” folder

app.use(express.static(path.join(__dirname, 'frontend')));

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router


// POINT 3. Set API routing to functions in post.js

router.route('/posts',cors()).get(posts.getAllPosts);
router.route('/posts/search',cors()).get(posts.getPostsByUser);
router.route('/posts',cors()).post(posts.insertNewPosts);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', cors(), router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);