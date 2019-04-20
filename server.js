var express = require('express');
const cors = require('cors');
var app = express();
var session = require('express-session');

require("./data/db")();

var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'Shhh this is a secret'
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.session && req.session.user) {
        //TODO Check whether there is a current session and if the user value for the session is valid.
        //     Will implement this after we get the backend sorted out completely.
        next();
    }
    else{
        next();
    }
});


const port = process.env.PORT || '4200';
app.set('port', port);


app.get('',function(req, res) {
    res.send('<h1>Recipe RESTful Services<h1>');
});

require('./services/user.services')(app);
require('./services/regularUser.services')(app);
require('./services/ingredients.services')(app);
require('./services/recipes.services')(app);
require('./services/nutritionist.services')(app);
require('./services/chef.services')(app);
app.listen(port);

