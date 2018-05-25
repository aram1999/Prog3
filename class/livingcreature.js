module.exports = class Livingcreature {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = Math.round(Math.random() * 8);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
        this.mulSpeed = 222;
        /*console.log("the cords");
        console.log(this.index);
        console.log(this.x);
        console.log(this.y);*/

        matrix[this.y][this.x] = this.index;

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

    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }//console.log(season);
        return found;
    }
    season() {
        if (season == "summer") {
            this.mulSpeed = 2;
        }
        else if (season == "spring") {
            this.mulSpeed = 3;
        }
        else if (season == "automne") {
            this.mulSpeed = 1;
        }
        else if (season == "winter") {
            this.multiply = 0;
            this.mulSpeed = 0;
        }

    }



}





