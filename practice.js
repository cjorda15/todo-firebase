/**
 * Created by SLEEK on 5/17/2017.
 */
// var items = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result = Object.keys(obj).map((e) =>{
//     var dun = {};
//     dun[e.key] = obj[e];
//     return dun;
// });
//
// const result = Object.keys(items).map((e) =>{
//     return ({[Number(e)]: items[e]});
// });
//
// arr.map(e => ({[e.key]: e.value}));
//
// console.log(result);


// var data = [
//     {"key":"fruit","value":"apple"},
//     {"key":"color","value":"red"},
//     {"key":"location","value":"garden"}
// ];
//
// const result = data.map(function (e) {
//     var element = {};
//     element[e.key] = e.value;
//
//     return element;
// });
//
// // console.log(result);
//
// function curve(arr, amount) {
//     for (var i = 0; i < arr.length; ++i) {
//         arr[i] += amount;
//     }
// }
// var grades = [77, 73, 74, 81, 90];
// curve(grades, 5);
// console.log(grades);

// var numbers = [1,3,4,5,6,6]
// var sum = 0;
// for(var i = 0; i < numbers.length; i++){
//     sum += numbers[i]
//
// }
// console.log(numbers);

// var numbers = []
// var sum = 0;
// for(var i = 0; i < 100; i++){
//     numbers.push(sum += i);
//
// }
// console.log(sum);
//
// var nums = [1,2,3,4,5,6,7,8,9,10];
// function square(num) {
//     console.log(num, num * num);
// }
// nums.forEach(square);
//
// function celebrityID () {
//     var celebrityID = 999;
//     // We are returning an object with some inner functions​
//     // All the inner functions have access to the outer function's variables​
//     return {
//         getID: function ()  {
//             // This inner function will return the UPDATED celebrityID variable​
//             // It will return the current value of celebrityID, even after the changeTheID function changes it
//             return celebrityID;
//         },
//         setID: function (theNewID)  {
//             // This inner function will change the outer function's variable anytime​
//             celebrityID = theNewID;
//         }
//     }
//
// }
//
// var mjID = celebrityID (); // At this juncture, the celebrityID outer function has //returned.
// mjID.getID(); // 999
// mjID.setID(567);
// console.log(mjID.getID());



// var array = [[1, 2], [3, 4]];
// var doubledArray = array.map(nested => nested.map(element => element * 2));
// console.log(doubledArray);


function foo2()
{
    return
    {
        bar: "hello"
    };
}
console.log(foo2());
//
// console.log(0.1 + 0.4);

// function isInteger(x){
//     console.log(Number.isInteger(x))
// }
//
// isInteger(5)

// function isInteger(x) { return (x^0) === x; }
// console.log(isInteger('5'))
//
// console.log( 5^0 === 5)

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

// function sum(x, y) {
//     if (y !== undefined) {
//         return x + y;
//     } else {
//         return function(y) { return x + y; };
//     }
// }
//
// console.log(sum(2)(3));

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    // This is it! Recursion!!
    return n * factorial(n - 1);
}
console.log(factorial(10));

function factor(number) {
    var result = 1;
    var count;
    for (count = number; count > 1; count--) {
        result *= count;
    }
    return result;
};
console.log(factor(6));

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
// }

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

console.log((function f(n){
    return ((n > 1) ? n * f(n-1) : n)
})(10));


var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());


var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

var arr = [[1,2], [3,4], [5,6]];
for (var i=0; i < arr.length; i++) {

    for (var j=0; j < arr[i].length; j++) {
        // console.log(j)
        console.log(arr[i][j]);
    }
}

// var myStringArray = ["Hello","World"];
// // var arrayLength = myStringArray.length;
// for (var i = 0; i < myStringArray.length; i++) {
//     console.log(myStringArray[i]);
//     //Do something
// }

var vump = function () {
    var myStringArray = ["Hello","World"];
// var arrayLength = myStringArray.length;
    for (var i = 0; i < myStringArray.length; i++) {
       console.log(myStringArray[i]);
        //Do something
    }
}

vump();

var num = [1, 2, 3, 4 ,5];
var timesThree = num.map(item => {return (item * 2)});
console.log(timesThree);

var transformers = [
    {
        name: 'Optimus Prime',
        form: 'Freightliner Truck',
        team: 'Autobot'
    },
    {
        name: 'Megatron',
        form: 'Gun',
        team: 'Decepticon'
    },
    {
        name: 'Bumblebee',
        form: 'VW Beetle',
        team: 'Autobot'
    },
    {
        name: 'Soundwave',
        form: 'Walkman',
        team: 'Decepticon'
    }
];

var robotsInDisguise = transformers.map(transformer => transformer.form);
console.log(transformers)

for(var i = 0; i < transformers.length; i++){
    console.log(transformers[i])
}

var students = [
    {
        name : "Mike",
        track: "track-a",
        achievements: 23,
        points : 400,
    },

    {
        name : "james",
        track: "track-a",
        achievements: 2,
        points : 21,
    },
]

students.forEach(myFunction);

function myFunction (item, index) {
var apt =[]
    for( var key in item ) {
        (apt.push(item[key]))
        console.log(apt)
    }
}

var key = [1,"this",3,5,5,8,"impreza",67, 'calumbo']
let count = []
for(var i in key){
    count.push(key[i])
    console.log(key[i], 'this is me')
    console.log(count, 'Another one')
}

var o = {
    a: 2,
    m: function() {
        return this.a + 1;
    }
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5