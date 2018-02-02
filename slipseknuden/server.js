// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

require("./routes/pages") (app);		// Pages


// Css
app.use(express.static('public'));

app.listen(3000);
console.log('3000 is the magic port');