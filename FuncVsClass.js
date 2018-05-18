function fPerson(name) {
    this.name = name;
    this.greeting = function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
    this.arr = new Array(10);
    for (var i = 0; i < this.arr.length; i++) {
        this.arr[i] = i;
    }
}

var person1 = new fPerson("Eric");
person1.greeting();

//New Style
class cPerson {
    constructor(name) {
        this.name = name;
        this.arr = new Array(10);
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i] = i;
        }

    }
    greeting() {
        console.log('Hi! I\'m ' + this.name + '.');
    }
}
var person2 = new cPerson("Eric");
person2.greeting();

