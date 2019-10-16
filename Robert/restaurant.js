var items = [{
        name: "Pizza",
        price: 6
    }, {
        name: "Salad",
        price: 2
    }, {
        name: "Schnitzel",
        price: 5
    }];
for (var i in items) {
    document.getElementById('menu-body').innerHTML += "<tr><td>" + items[i].name + "</td><td>" + items[i].price + "</td><td><input type='submit' class='cart-button' value='Order Item'></td></tr>";
    console.log(items[i].name);
}
console.log(items[1].name);
function addOne(x) {
    var node = Number(document.getElementsByClassName('amnt')[x].innerHTML);
    node++;
    document.getElementsByClassName('amnt')[x].innerHTML = node;
}
// if empty just push to an object; else -> loop compare name of element if it's in object
var push;
push = [];
function buttonListener() {
    var _loop_2 = function (i_1) {
        incrementBtn[i_1].addEventListener('click', function () {
            addOne(i_1);
        });
    };
    for (var i_1 = 0; i_1 < incrementBtn.length; i_1++) {
        _loop_2(i_1);
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
    }
    else {
        for (var i_2 = 0; i_2 < push.length; i_2++) {
            if (push[i_2] == content) {
                console.log("yes");
                var val = Number(document.getElementsByClassName('amnt')[i_2].innerHTML);
                val++;
                document.getElementsByClassName('amnt')[i_2].innerHTML = val;
            }
            else {
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
var _loop_1 = function (i_3) {
    btn[i_3].addEventListener('click', function () {
        addToCart(i_3);
    });
};
for (var i_3 = 0; i_3 < btn.length; i_3++) {
    _loop_1(i_3);
}
/*var person : number = false;*/
