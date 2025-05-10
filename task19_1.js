var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.map = function (fn) {
        var newBoxValue = fn(this.value);
        return new Box(newBoxValue);
    };
    return Box;
}());
var box1 = new Box(10);
var box2 = box1.map(function (x) { return x * 2; });
console.log(box1, box2);
var box3 = new Box("hello");
var box4 = box3.map(function (str) { return str.toUpperCase(); }); // Box<string> со значением "HELLO"
console.log(box3.getValue()); // "hello"
console.log(box4.getValue()); // "HELLO"
