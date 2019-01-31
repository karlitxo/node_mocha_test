var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var http = require('http');
var app = express();

// view engine setup
app.set('app-name', 'node_ci_test');
app.set('port',process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// not yet
//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// the only thing it does
app.all('*', function(req, res){
  debugger;
  res.render(
    'index',
    {title: 'Howdy, stranger!', msg: 'Welcome to ' + app.get('app-name')}
  );
});

/* refactored for testing  below
http
  .createServer(app)
  .listen(
    app.get('port'),
    function(){
      console.log(
        'Express is listening on port ' +
        app.get('port')
      );
    }
  );
*/

var server = http.createServer(app);
var boot = function () {
  server.listen(app.get('port'),function(){
    console.log('Express is listening on port ' + app.get('port'));
  });
}
var shutdown = function () {
  server.close();
}

if (require.main == module) {
  boot();
}
else {
  console.info('running app as module');
  exports.boot=boot;
  exports.shutdown=shutdown;
  exports.port = app.get('port');
}
  
module.exports = app;
