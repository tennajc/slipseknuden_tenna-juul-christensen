const port = process.env.PORT || 3000;

// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

require("./routes/pages") (app);		// Pages

// Css
app.use(express.static('public'));

app.listen(port); 						// 3000
console.log(`Server started http://localhost:${port}/`);