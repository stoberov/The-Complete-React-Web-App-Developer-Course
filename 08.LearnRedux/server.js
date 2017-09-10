var express = require('express');

// Create our app
var app = express();

// Heroku port or default to 3000 on localhost
const PORT = process.env.PORT || 3000;

// Redirect HTTPS to HTTP
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});
