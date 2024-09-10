console.log("Hello World");
var name="Omkar Bhosale is not a good boy";
console.log(name);
var name="Hello Pune";//Variable written using var can be reassigned and redeclared
console.log(name);
//Data types are the types of data stored in the variables.there are two types of data types primitive data types and non-primitive data types.
var name1="Hello Omkar"; //string data type
var number1=12;//number
var booldata=true;//boolean
console.log(name1);
console.log(number1);
console.log(booldata);
//data type can be determined using typeof() function
console.log(typeof(name1));
console.log(typeof(number1));
console.log(typeof(booldata));

var mydata;//variable declaration
mydata="You did not helped your mother";//variable assignment
console.log(mydata);

var mydata2="Hello Pune"//variable declaration and assignment
console.log(mydata2);
mydata2="Hello Satara"//variable reassignment
console.log(mydata2);

//Javascript allows you to store number in variable which already has string data type.
//Javascript is dynamically typed language
let mystring="Hello World";
console.log(typeof(mystring));//data type of variable is decided at the runtime
mystring=12;
console.log(typeof(mystring));//As here the data type of variable is decided at the runtime.

//Activity
var greeter="Hey Hi";//declared and initialized variable;
console.log(greeter);
greeter="Hey";//reassignment
console.log(greeter);

//using const we cannot redeclare or reassign variable
const daysInAWeek=7;
//daysInAWeek=12; we cannot reassign to variable declared with const
//const daysInAWeek=7; we cannot redeclare variable declared with const

//using let we cannot redeclare the variable but we can reassign to the variable

let mymothername="Alka Bhosale";
//let mymothername we cannot redeclare the variable
mymothername="Alka Bhosale,my loving mother";//we can reassign the variable declared with let
console.log(mymothername);

let a=20;
let b=a;//It points value which is equal to a at diiferent memory location
console.log(a);
console.log(b);
a=35;
console.log(a);//It points value at diiferent memory location

//let 12number we dont start variable name with the number.We start variable name with underscore,dollar or letter
let _name="Omkar";
let $name="Alka";
let name123="Soham";
let name_1="Parth";
console.log(_name);
console.log($name);
console.log(name123);
console.log(name_1);
//we can write number after the starting letter of variable name
