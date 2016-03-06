/**
 * Created by Vityka on Mar, 06.
 */

var express     = require('express');
var vhost       = require('vhost');
var port        = process.env.PORT || 8000;
var dns         = process.env.DNS || 'vimudo.local';

// app init
var mainapp = express();

mainapp.use(express.static('public'));

var app = express();
app.use(vhost(dns, mainapp));
//listen on www. too
app.use(vhost('www.' + dns, mainapp));

// app listen
app.listen(port, function(){
	console.log("MusicShare API started on port: " + port);
});
