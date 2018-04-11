
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//load items
var items = require('./routes/items'); 
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4200);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

// for development 
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.use(
    
    connection(mysql,{
        
        host: 'mysql://mysql:4302/', 
        user: 'admin', 
        password : 'imeshaevno',
        port : 4302, 
        database:'data1'

    },'pool') 

);
/*
    host: 'localhost',
    user: 'admin',
    password : 'root', 
    port : 4302, //port mysql
    database:'data1'
*/

app.get('/', routes.index);
app.get('/items', items.list);
app.get('/items/add', items.add);
app.post('/items/add', items.save);
app.get('/itemss/delete/:id', items.delete_item);
app.get('/items/edit/:id', items.edit);
app.post('/items/edit/:id',items.save_edit);


app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
