var Livingcreature = require('./livingcreature.js');

module.exports = class Xotaker extends Livingcreature {

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
        //console.log(this.directions);
    }

    sharjvel() {
        //console.log("Es sharjveci   1");
        var vand = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        if (vand && this.multiply >= this.speed / 4) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0];
            this.y = vand[1];
            matrix[this.y][this.x] = this.index == 2 ? 2 : 2.5 ;
            this.multiply = 0;
            //console.log("Es sharjveci   2");
        }
        //console.log("I mooved");
        //console.log("Es sharjveci   3");
    }

    utel() {
        this.energy--;
        this.multiply++;
        //console.log("es kera xot   1");

        var vand = this.yntrelVandak(1)[Math.floor(Math.random() * this.yntrelVandak(1).length)];
        if (vand && this.multiply >= this.speed / 4) {
            //console.log("es kera xot    3");
            this.energy += this.speed;
            matrix[this.y][this.x] = 0;
            this.x = vand[0];
            this.y = vand[1];
            matrix[this.y][this.x] = this.index ==2 ? 2 : 2.5;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                    //console.log("es kera xot    2");
                }
            }


        } else this.sharjvel();

    }
    /*
	
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
        
		*/

    bazmanal() {
        if (this.index == 2) {
            var vand = this.yntrelVandak(2.5)[Math.floor(Math.random() * this.yntrelVandak(2.5).length)];
            if (vand) {
                var newvand = this.yntrelVandak(0)[Math.floor(Math.random()*this.yntrelVandak(0).length)];
                if(newvand){
                        var r = (Math.round(Math.random()) / 2) + 2;
                        var newxotaker = new Xotaker(newvand[0], newvand[1], r);
                        xotakerArr.push(newxotaker);
                        matrix[newvand[1]][newvand[0]] = r;
                        //console.log("exavv")
                }
                
            }
            //console.log("bazmanal");
        }
    }

    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}