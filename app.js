var express = require('express');
var http = require('http');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);
app.set('port', process.env.VCAP_APP_PORT || 3000);
app.set('view engine', 'jade');

app.use('/', routes);
app.use('/users', users);


// Erreurs Handlers

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});


module.exports = app;
