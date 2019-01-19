const express = require('express');
const stripe = require('stripe');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set static folder
app.use(express.static(`${__dirname}/public`));



app.use('/', indexRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;