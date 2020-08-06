const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');

const app = express();

// settings
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));

// Routes
const routes = require('./routes/index');
app.use('/', require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server On Port', app.get('port'));
});