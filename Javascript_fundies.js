//Javascript Fundamenals

// 1. Can write a function in Javascript

function add(a ,b){
  c = a + b ;
  return c;
}

add(2,3);


// 2. Can write a object literal

var obj = {
  firstname: "Obo",
  lastname: "Agboghidi",
  age: 28,
  job: "Software engineer"
};

// 3. Can write a Array literal

var arr = [1,2,3,4,5,];

// 4. Can write a string literal

var str = "String";

// 5. Can write a number literal

var int = 5;

// 6. write an if/else statement

var two = 2;

function compare(){
  if (two === 2){
  return true;
}else {
  return false;
  }
}
compare();

// 7. Can write a switch statement in Javascript
var fruits = "Apple";

switch(fruits) {
        case "Banana":
            text = "Banana is good!";
        break;
        case "Orange":
        text = "I am not a fan of orange.";
        break;
        case "Apple":
        text = "How you like them apples?";
        break;
        default:
        text = "I have never heard of that fruit...";
      }


// 8.  Can write a while loop

var i = 0;

while( i < 100){
  console.log("While loop iterates for the " + i - 1 + "time");
  i =+ 2;
}

// 9. Can write a for loop

var word = "apple";
for(i = 0; i < word.length; i++){
  console.log(word[i]);
}

// 10. Can write a Pure function

function addTo(){
  a = 2;
  b = 2;
  c = a * b;
  return c;
}

// 11. Can set the value of a property on a JavaScript Object using . syntax

var obj = {};

obj.firstName = "Obo";

// 12. Can set the value of a property on a JavaScript Object using bracket notation

obj['firstName'] = "Obo";

// 13. Can get the value of a property on a JavaScript Object using . syntax

obj.firstName;

// 14. Can get the value of a property on a JavaScript Object using bracket notation

obj[firstName];

// 15. Can you describe the A double equal sign is a way to determine wheher or not the inputs compared are equal. It is more concered with the values than anything else. === on the other hand, even check not only the half-lie, but also regarding the object, arrat, etc

// 16.

// 17. Can use Array.push in Javascript

var array = [1,2,3,4,5];

array.push(6);
array;
//[1,2,3,4,5,6]
// 18. Can use Array.pop in Javascript

var array = [1,2,3,4,5];

array.pop();
array;
//[1,2,3,4]

// 19. Can use Array.shift in Javascript

var array = [1,2,3,4,5];

array.shift(0);
array;
//[2,3,4,5]

// 20. Can use Array.unshift in Javascript

var array = [1,2,3,4,5];

array.shift(0);
array;
//[0,1,2,3,4,5]

// 21. Can use Array.foreach in Javascript

var array = [1,2,3,4,5];

array.forEach(function(i){
  let double = i * 2;
  console.log(double);
});

// 22. Can use Array.map in Javascript

var array = [1,2,3,4,5];

var doubles = array.map(function(i){
  let double = i * 2;
  //console.log(double);
  return double;
});
doubles;

// 23. Can use Array.filter in Javascript

var array = [1,2,3,4,5,6,7,8,9,10];

var filtered = array.filter(function(i){
  return i % 2 === 0;
});

filtered;

// 24. can use Array.reduce in Javascript

var array = [1,2,3,4,5];

var multi = array.reduce(function(a,b){
  return a * b;
});

multi;

// 25. can declare global and local variables

var globalVar = 1;

function localScope(){
  var localVar = 2;
  return localVar;
}

localscope();

// 26.

// 27.

//28. Can write a closure in Javascript

function outerFunction(a){
  let b = a * 4;
  console.log(b);
  function innerFunction(){
    c = b * 10;
    console.log(c);
  }
  innerFunction();
  return c;
}

outerFunction(2);

// 29

// 30

/* Lexical scope refers to where the variable is declared inside of a function. It sets the scope
(range of functionality) of a variable so that it may only be called(referenced)
 from within the block of code in which it was defined. */

// 31. Can split a string into an array in Javascript

var word = "String";

word.split('');

// 32. Can join an array into a string in Javascript

var word = ["s","t","r","i","n","g"];

word.join('');
//string
