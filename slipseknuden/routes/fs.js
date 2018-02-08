module.exports = function () {

const fs = require('fs');

// opretMappe();
function opretMappe() {
    fs.mkdir('log/', function (err) {
        if (err) {
            throw err;
        }
        console.log("Mappen 'log' oprettet!");
    });
}

// sletMappe();
function sletMappe( ) {
    fs.rmdir('log', function (err) {
        if (err) {
            throw err;
        }
        console.log("Folder removed!");
    });    
}

// opretMappe();
// sletMappe();
}