const mathsMarks=94;
const scienceMarks=98;
const totalMarks=mathsMarks+scienceMarks;
console.log(totalMarks);
const percentage=totalMarks/2;
console.log(percentage);

let value1=3;
let value2=4;

let solution=value1**2/value2*2;
console.log(solution);

let solution1=(value1**2)/(value2*2);
console.log(solution1);

let solution2=value1**3*value2*2/3;
console.log(solution2);

let solution3=value1**4*value2/2;
console.log(solution3);

let a=10,b=20;
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a!==b);
console.log(a!=b);
console.log(a===b);

let a1=20,a2="20";
console.log(a1==a2);//loosely strict equality operator loose equality operator
console.log(a1===a2);//tightly strict equality operator strong equality operator
console.log(a1!=a2);//loose equality
console.log(a1!==a2);//strict equality

let a3=31,a4="51";
console.log(a3!=a4);//loose equality
console.log(a3!==a4);//strong equality

console.log((a1==a2)&&(a3==a4));
console.log((a3!==a4)&&(a1!==a2));
console.log((a1==a2)&&(a3!==a4));
console.log((a1==a2)||(a3==a4));//OR logical operator
console.log((a1==a3)||(a2==a4));//OR logical operator

let weather="Sunny";
if(weather==="Rainy")
{
    console.log("Take Umbrella");
}
else
{
    console.log("Do not take Umbrella");
}

//Activity
let number=10;
if(number>0)
{
    console.log("Positive Number");
}
else if(number<0)
{
    console.log("Negative Number");
}
else
{
    console.log("Zero");
}

let age=18;
if(isNaN(age))
{
    console.log("Invalid Input");
}
else
{
    if(age>=18)
    {
        console.log("You can Drive");
    }
    else
    {
        console.log("You cannot drive");
    }
}

function squareFunction(number)
{
    let solution=number**2;
    return solution;
}
console.log(squareFunction(12));
console.log(squareFunction(34));
console.log(squareFunction(35));

function factorial(number)
{
    if(number<0)
    {
        return "Invalid Number";
    }
    else if(number==0)
    {
        return 1;
    }
    else
    {
        let factorial=1;
        for(let i=1;i<=number;i++)
        {
            factorial=factorial*i;
        }
        return factorial;
    }
}

console.log(factorial(-1));
console.log(factorial(2));
console.log(factorial(0));
console.log(factorial(6));

function getSum(num1,num2)
{
    if(isNaN(num1)||isNaN(num2))
    {
        return "Invalid Input";
    }
    else
    {
        let solution=num1+num2;
        return solution;
    }
}

console.log(getSum(12,12));
console.log("Hello");
console.log(getSum(250,100));
console.log(getSum("Hello",12));

function greetings()
{
    console.log("Hello World");
}

greetings();//function is called here

function myfunction1(number1,number2)//Here number1 and number2 are parameters
{
    let solution=Math.floor(number1/number2);
    console.log(solution);
}

myfunction1(12,7)//12 and 22 are arguments passed to the function