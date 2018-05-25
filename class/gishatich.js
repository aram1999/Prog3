var Livingcreature = require('./livingcreature.js');

module.exports = class Gishatich extends Livingcreature {

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        //console.log("SNK");
    }

    sharjvel() {
        var vand = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            //console.log("sharjvel");
        }
    }

    utel() {
        this.energy--;
        var vand = this.yntrelVandak(2)[Math.floor(Math.random() * this.yntrelVandak(2).length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    //console.log("utel");
                }
            }
        }
        else this.sharjvel();
    }
    /*
    if (this.index == 2) {
                var vand = this.random(this.yntrelVandak(2.5));
                if (vand) {
                    var newvand = this.random(this.yntrelVandak(0));
                    if (newvand) {
                        var r = (Math.round(Math.random()) / 2) + 2;
                        var newxotaker = new Xotaker(newvand[0], newvand[1], r);
                        xotakerArr.push(newxotaker);
                        matrix[newvand[1]][newvand[0]] = r;
                    }
                }
            }
    */
    bazmanal() {
        if (this.index == 3) {
            var vand = this.yntrelVandak(3.5)[Math.floor(Math.random() * this.yntrelVandak(3.5).length)];
            if (vand) {
                var newvand = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
                //console.log(newvand)
                if (newvand) {
                    var r = (Math.round(Math.random()) / 2) + 3;
                    var newgishatich = new Gishatich(newvand[0], newvand[1], r);
                    gishatichArr.push(newgishatich);
                    matrix[newvand[1]][newvand[0]] = r;
                    //console.log("exav")
                }

            }
            //console.log("bazmanal");
        }
    }

    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
}


