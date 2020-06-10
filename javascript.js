// #TRIM
// const greeting = '   Hello world!   ';
// console.log(greeting);
// console.log(greeting.trim());

// #TOLOWERCASE
// let strA = 'Avengers will be a great movie';
// console.log(strA.toLocaleLowerCase());
// console.log(strA)

// #CURRIED FUNCTION

//#LET VS VAR
/* function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar);
  
    {
      let baz = "Bazz";
      console.log(baz);
    }
  
    console.log(baz); 
}
  
run(); */

/* function run() {
    console.log(foo); // undefined
    var foo = "Foo";
    console.log(foo); // Foo
}
  
run(); */

/* function checkHoisting() {
    console.log(foo); // ReferenceError
    let foo = "Foo";
    console.log(foo); // Foo
}
  
checkHoisting(); */

/* 'use strict';
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo' is replaced.
console.log(foo);
let bar = "bar1";
let bar = "bar2"; */

// #POP
// let cats = ['Bob', 'Willy', 'Mini','Last'];
// let endcut = cats.pop()
// console.log(endcut);
// console.log(cats);

// #SHIFT
// let cats = ['Bob', 'Willy', 'Mini','Last'];
// let frontcut = cats.shift()
// console.log(frontcut);
// console.log(cats);

//#PUSH
// let cats = ['Bob', 'Willy', 'Mini'];
// let newlength = cats.push('Last','Laast');
// console.log(newlength);
// console.log(cats);

//#UNSHIFT
// let cats = ['Bob', 'Willy', 'Mini'];
// let newlength = cats.unshift('First','Second');
// console.log(newlength);
// console.log(cats);


// #SPLICE
// var array=[1,2,3,4,5];
// console.log(array.splice(2));
// ingat : array.splice(2) = array.splice(2,1)
// array.splice(3)
// console.log(array);

// var array2=[6,7,8,9,0];
// console.log(array2.splice(2,2));

// var array3=[11,12,13,14,15];
// console.log(array3);
// console.log(array3.splice(2,1,"Hello","World")); 
// console.log(array3);

// var array4=[16,17,18,19,20];
// console.log(array4.splice(-2,1,"me"));
// console.log(array4);

// #SLICE
// var array=[1,2,3,4,5]
// console.log(array.slice(2));
// console.log(array.slice(-2));
// console.log(array)

// var array2=[6,7,8,9,0];
// console.log(array2.slice(2,4));
// console.log(array2.slice(-2,4));
// console.log(array2.slice(-3,-1));

// #FINDINDEX
// let ranks = [1, 5, 7, 8, 10, 7]
// let index = ranks.findIndex(rank => rank === 8);
// console.log(index);

// ingat : jika ga nemu will return -1
// let ranks2 = [1, 5, 7, 8, 10, 7]
// let index2 = ranks2.findIndex(rank => rank === 100);
// console.log(index2);

// #FIND
// let array = [10, 20, 30, 40, 50]; 
// let found = array.find(element => element >30); 
// console.log(found); 

// #FILTER
// const isPositive = (value) => value < 0
// let filtered = [112, 52, 0, -1, 944].filter(isPositive);
// console.log(filtered)

// let array = [10, -20, 30, -40, 50]; 
// let filtered = array.filter(n=>n<0)
// console.log(filtered)


// #SPREAD
// let arr = [1,2,3]; 
// let arr2 = [4,5]; 
// arr = [...arr,...arr2]; 
// arr3 = [...arr,7,100]; 
// console.log(arr);
// console.log(arr3);


// ingat : spread operator for copying  
// let arr = ['a','b','c']; 
// let arr2 = [...arr]; 
// console.log(arr); 
// arr2.push('d'); 
// console.log(arr2); 
// console.log(arr); 

// #CALLBACK
/* let numbers = [1, 2, 4, 7, 3, 5, 6,21];

const isOddNumber = number=> number % 2

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers);  */

/* function add(a, b , callback){ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.`); 
    callback(); 
} 
    
function disp(){ 
    console.log('This must be printed after addition'); 
} 

const a = add(5,6,disp)
console.log(a)   */  


