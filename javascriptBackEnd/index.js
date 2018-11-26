const express = require('express');
const app = express();


app.get('/', function(req, res) { 

    res.write('Ok');
    res.send();

});

app.listen(4000);