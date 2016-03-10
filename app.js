/**
 * Created by Vityka on Mar, 06.
 */

var express     = require('express');
var port        = process.env.PORT || 8000;

// app init
var app = express();

app.use(express.static('public'));

// app listen
app.listen(port, function(){
	console.log("MusicShare API started on port: " + port);
});
