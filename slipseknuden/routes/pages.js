module.exports = function (app) {
    
// Index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

// Om slipseknuden
app.get('/om-slipseknuden', function(req, res) {
	res.render('pages/om-slipseknuden');
});

// Garanti
app.get('/garanti', function(req, res) {
	res.render('pages/garanti');
});

// Kontakt
app.get('/kontakt', function(req, res) {
	res.render('pages/kontakt');
});

// Nyheder
app.get('/nyheder', function(req, res) {
	res.render('pages/nyheder');
});

// Om slipseknuden
app.get('/produkter', function(req, res) {
	res.render('pages/produkter');
});
   
} // End of module.exports

