///const io = require('socket.io-client');
var socket = io();
var filling;
var w = 30;
var h = 30;
var side = 24;
var frame = 0;
var xot;
/*var color = "#acacac";
var xotakerM = ;
var xotakerF = ;
var gishatichM = ;
var gishatichF = ;
var bool = true;*/

function setup() {
    socket.on("script", function (firstmatrix) {
        createCanvas(side * w, side * h);
        background("#acacac");
        frameRate(5);
        console.log("Start");
    });
}
setup();
/*socket.on("xot", function(xoter){
    xot = xoter;

});*/
//var canvas = getElementsByTagName("canvas");
socket.on("script2", function (season) {

    //console.log(filling);
    document.getElementById("season").innerText = season;
    if (season == "summer") {
        //console.log(season);
        filling = "green";

    }
    else if (season == "spring") {
        filling = "#84fe00";
    }
    else if (season == "automne") {
        filling = "orange";
    }
    else {
        filling = "white";
    }
});

socket.on("script1", function (matrixArr) {

    //console.log("done !!!!!!!!");console.log("0000000")
    function mouseClicked(evt) {

        matrixArr[Math.floor(mouseY / 24)][Math.floor(mouseX / 24)] = 0;
        matrixArr[Math.floor(mouseY / 24) + 1][Math.floor(mouseX / 24)] = 0;
        matrixArr[Math.floor(mouseY / 24)][Math.floor(mouseX / 24) + 1] = 0;
        matrixArr[Math.floor(mouseY / 24) - 1][Math.floor(mouseX / 24)] = 0;
        matrixArr[Math.floor(mouseY / 24)][Math.floor(mouseX / 24) - 1] = 0;
        matrixArr[Math.floor(mouseY / 24) - 1][Math.floor(mouseX / 24) - 1] = 0;
        matrixArr[Math.floor(mouseY / 24) + 1][Math.floor(mouseX / 24) + 1] = 0;
        console.log("I did it");
        //console.log(matrixArr[Math.floor(mouseY/30)][Math.floor(mouseX/30)]);
    }
    window.onclick = mouseClicked;

    background("#acacac");
    for (var y in matrixArr) {
        for (var x in matrixArr[y]) {
            

            if (matrixArr[y][x] == 0) {
                fill("#acacac");
            } else if (matrixArr[y][x] == 1) {
                //console.log(filling)
                fill(filling);
            } else if (matrixArr[y][x] == 2) {
                fill("yellow");
            }
            else if (matrixArr[y][x] == 2.5) {
                fill("#c1fd20");
            }
            else if (matrixArr[y][x] == 3) {
                fill("red");
            }
            else if (matrixArr[x][y] == 3.5) {
                fill("pink");
            }
            else if (matrixArr[x][y] == 4) {
                fill("black");
            }

            rect(x * side, y * side, side, side);
            frame ++;
            //console.log(frame);
            /*if(frame==60){
                frame = 0;
                console.log(frame);
                //socket.emit("stat")
            }*/

        }
    }

});




