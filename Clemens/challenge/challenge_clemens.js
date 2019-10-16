var products = [{
        "id": 1,
        "name": "Sushi",
        "price": 5,
        "currency": "€",
        "vegetarian": false,
        "pic": "https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628_960_720.jpg",
        "comment": "",
        "rating": null
    }, {
        "id": 2,
        "name": "Pizza",
        "price": 3,
        "currency": "€",
        "vegetarian": "true",
        "pic": "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
        "comment": "",
        "rating": null
    }, {
        "id": 3,
        "name": "Kebap",
        "price": 3,
        "currency": "€",
        "vegetarian": "false",
        "pic": "https://cdn.pixabay.com/photo/2016/10/19/18/25/doner-kebab-1753615_960_720.jpg",
        "comment": "",
        "rating": null
    }, {
        "id": 4,
        "name": "Spaghetti",
        "price": 9,
        "currency": "€",
        "vegetarian": "false",
        "pic": "https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_960_720.jpg",
        "comment": "",
        "rating": null
    }];
// += attend
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var i = products_1[_i];
    document.getElementById("dishes").innerHTML += "<div><p>" + i.name + "</p></div>" + "<div><img src=" + '"' + i.pic + '"' + "alt=" + i.name + " " + "height=300px></div>" + "<div><span>" + i.price + i.currency + "</span><br>Leave us a comment!</div>" + "<div><input type=\"text\" name=\"Leave us a comment!\" value=" + i.comment + "></div>" + "<div>Give us a rating 5 to 1 (5 is the best)!<br>" + "<input type=\"text\" name=\"Leave us a comment!\" value=" + i.rating + "></div>" + '<button>Save your Feedback to ' + i.name + '</button>';
}
