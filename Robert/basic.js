// -w in cmd für watch mode
console.log("Hello World");
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var funcs = [];
for (var i = 0; i < num.length; i++) {
    var _loop_1 = function () {
        var y = num[j];
        var x = num[i];
        funcs.push(function () {
            document.write(y + "X" + x + " = " + y * x + "<br>");
        });
    };
    for (var j = 0; j < num.length; j++) {
        _loop_1();
    }
}
funcs.forEach(function (func) {
    func();
});
