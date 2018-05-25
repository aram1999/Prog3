var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
console.log("done !!!");
var Amenaker = require('./class/amenaker.js');
var Gishatich = require('./class/gishatich.js');
var Xotaker = require('./class/xotaker.js');
var Grass = require('./class/xot.js');
var LC = require('./class/livingcreature.js');

app.use(express.static("public"));
global.matrix = [];
global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.amenakerArr = [];
//global.t = [1,2,3,4];

app.get('/', function (req, res) {
    res.redirect('./public/');
});
server.listen(3000);
var w = 30;
var h = 30;
var side = 24;

io.on('connection', function (socket) {




    function setup() {
        function genMatrix(w, h) {
            var matrixArr = [];
            for (var y = 0; y < h; y++) {
                matrixArr[y] = [];
                for (var x = 0; x < w; x++) {
                    var r = 120 * Math.random(120);
                    //console.log(r);
                    if (r < 20) r = 0;
                    else if (r < 65) r = 1;
                    else if (r < 90) r = 2;
                    else if (r < 100) r = 3;
					else if (r < 120) r = 4;
                    matrixArr[y][x] = r;

                }
            }
            return matrixArr;
        }
        matrix = genMatrix(w, h);

    }
    setup();
    socket.emit("script", matrix);
    //console.log("lav");

    
    global.season = "spring";
    setInterval(function () {

        if (season == "spring") {
            //console.log(season);
            season = "summer";

        }
        else if (season == "summer") {
            //console.log(season);
            season = "automne";
        }
        else if (season == "automne") {

            //console.log(season);
            season = "winter";

        }
        else if (season == "winter") {

            //console.log(season);
            season = "spring";


        }
        socket.emit("script2", season);

    }, 4000);

    function main() {

        /*for (var y in matrix) {
            for (var x in matrix[y]) {//
                console.log("I found it!!!");
                console.log(matrix[x][y]);
            }
        }*/

        for (var y in matrix) {
            for (var x in matrix[y]) { //console.log("Hey i am working normal!");
                if (matrix[y][x] == 1) {
                    grassArr.push(new Grass(x * 1, y * 1, 1));
                } else if (matrix[y][x] == 2) {
                    var r2 = (Math.round(Math.random()) / 2) + 2;
                    matrix[x][y] = r2;
                    xotakerArr.push(new Xotaker(x * 1, y * 1, r2));
                } else if (matrix[y][x] == 3) {
                    var r3 = (Math.round(Math.random()) / 2) + 3;
                    matrix[x][y] = r3;
                    gishatichArr.push(new Gishatich(x * 1, y * 1, r3));
                } else if (matrix[y][x] == 4){
					var r4 = 4;
					amenakerArr.push(new Amenaker(x * 1, y * 1, r4));
				}
				

            }
        }


        for (var i in grassArr) {
            //grassArr[i].ms = t;
            grassArr[i].mul(); //console.log(grassArr[i]);
            grassArr[i].season();
        }

        for (var i in xotakerArr) {
            xotakerArr[i].bazmanal();
            xotakerArr[i].utel();
            xotakerArr[i].season();
            xotakerArr[i].mahanal(); //console.log(xotakerArr[i]);
        }

        for (var i in gishatichArr) {
            gishatichArr[i].bazmanal();
            gishatichArr[i].utel();
            gishatichArr[i].season();
            gishatichArr[i].mahanal(); //conole.log("i made a gishatich");
        }
		for(var i in amenakerArr) {
			amenakerArr[i].utel();
			amenakerArr[i].mahanal();
		}
        //console.log("Dont look at me!")
        //console.log(grassArr);
        socket.emit("script1", matrix);



    }

    //var k = 1;



    setInterval(main,500);

});
