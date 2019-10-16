// -w in cmd für watch mode

console.log("Hello World");

const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var funcs = [];
for (var i = 0; i < num.length; i++) {
	for (var j = 0; j < num.length; j++) {
		let y = num[j];
		let x = num[i];
		funcs.push(function() {
		document.write(y + "X" + x + " = " + y*x + "<br>");
		})
	}
}


funcs.forEach(function(func) {
	func()
})

var btns = document.getElementsByClassName("btn");

function printValue(i) {
	console.log(i);
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", () => {
		printValue(i);
	});
}