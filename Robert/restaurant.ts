var items = [{
	name: "Pizza",
	price: 6
}, {
	name: "Salad",
	price: 2
}, {
	name: "Schnitzel",
	price: 5
}]

for (var i in items) {
	document.getElementById('menu-body').innerHTML += "<tr><td>" + items[i].name + "</td><td>" + items[i].price + "</td><td><input type='submit' class='cart-button' value='Order Item'></td></tr>";
	console.log(items[i].name);
}

console.log(items[1].name);

function addOne(x: any) {
	var node = Number(document.getElementsByClassName('amnt')[x].innerHTML)
	node++
	document.getElementsByClassName('amnt')[x].innerHTML = node;
}

// if empty just push to an object; else -> loop compare name of element if it's in object
var push : string[];
push = [];


function buttonListener() {
for (let i=0; i < incrementBtn.length; i++) {
		incrementBtn[i].addEventListener('click', () => {
			addOne(i);
		})
	}
}

function addToCart(x) {

var table = document.getElementById('cart-body');
var content = "<tr><td>" + items[x].name + "</td><td>" + items[x].price + "</td><td class='amnt'>1</td><td><button class='increment-btn'>+</button></tr>";

console.log(push);

if (document.getElementById('cart-body').childElementCount == 0) {
	push[0] = content;
	table.innerHTML = push[0];
	buttonListener();
} else {
	for (let i=0; i<push.length; i++) {
		if (push[i] == content) {
			console.log("yes");
			let val = Number(document.getElementsByClassName('amnt')[i].innerHTML);
			val++
			document.getElementsByClassName('amnt')[i].innerHTML = val;
		} else {
			push[push.length] = content;
			table.innerHTML += content;
			console.log("Hi");
			buttonListener();
		}
	}
}	
}

var btn = document.getElementsByClassName('cart-button');
var incrementBtn = document.getElementsByClassName('increment-btn');

for (let i=0; i < btn.length; i++) {
	btn[i].addEventListener('click', () => {
		addToCart(i);
	});
}




/*var person : number = false;*/
