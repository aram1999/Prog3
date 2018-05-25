var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var matrix = [];

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);






io.on('connection', function (socket) {
   for(var i in matrix) {
     io.sockets.emit("display matrix", matrix[i]);
   }
   socket.on("send matrix", setInterval(function(){
            for(var i in grassArr) {
                grassArr[i].mul();
            }
            for(var i in xotakerArr) {
                xotakerArr[i].bazmanal();
                xotakerArr[i].utel();
                xotakerArr[i].mahanal();
            }
            for(var i in gishatichArr) {
                gishatichArr[i].bazmanal();
                gishatichArr[i].utel();
                gishatichArr[i].mahanal();
            }
   },1000))
});

    