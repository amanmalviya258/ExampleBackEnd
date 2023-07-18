const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config({ path: './src/configs/.env' });
require('./src/configs/db-connection');
const app = express();

// cors origin
const corsOptions = { origin: '*' , methods: '*', credentials:true  };
//app.use(cors(corsOptions));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(require('./src/utils/response/error-handler'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./src/routes/index'));

// catch 404 and forward to error handler
// app.use('**', (req, res, next) => {
//     next(createError(404));
// });

// app.get('/', (req, res) => {
//     res.render('index');
// });


// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;