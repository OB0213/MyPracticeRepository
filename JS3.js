let stringdata="Hello World";
let vowelCount=0;
for(let i=0;i<stringdata.length;i++)
{
    if(stringdata[i].toLowerCase()==="a"||stringdata[i].toLowerCase()==="e"||stringdata[i].toLowerCase()==="i"||stringdata[i].toLowerCase()==="o"||stringdata[i].toLowerCase()==="u")
    {
        vowelCount++;

    }
}
console.log(vowelCount);
consonants=stringdata.length-vowelCount;
console.log("Consonant Count is:"+consonants);

let strings="\"Aai,I love you.You please come back\", I cannot live without you as I want to fulfill dreams in front of you.";
console.log(strings);
console.log(strings.length);

function largestOf3Numbers(num1,num2,num3)
{
    if(num1>=num2&&num1>=num3)
    {
        return num1;
    }
    else if(num1<=num2&&num2>=num3)
    {
        return num2;
    }
    else
    {
        return num3;
    }
}

console.log(largestOf3Numbers(1,3,4));
console.log(largestOf3Numbers(22,11,2));

function smallestOf3Numbers(num1,num2,num3)
{
    if(num1<=num2&&num1<=num3)
    {
        return num1;
    }
    else if(num1>=num2&&num2<=num3)
    {
        return num2;
    }
    else
    {
        return num3;
    }
}

console.log(smallestOf3Numbers(2,3,1));
console.log(smallestOf3Numbers(22,33,34));
console.log(smallestOf3Numbers(22,11,32));

function checkNestedPositiveOrNegative(number)
{
    if(number>0)
    {
        if(number%2===0)
        {
            return "Positive Even No";
        }
        else
        {
            return "Positive Odd No";
        }
    }
    else if(number<0)
    {
        if(number%2==0)
        {
           return "Negative Even Number";
        }
        else
        {
            return "Negative Odd Number";
        }
    }
    else
    {
        return "Zero";
    }
}

console.log(checkNestedPositiveOrNegative(12));
console.log(checkNestedPositiveOrNegative(-12));
console.log(checkNestedPositiveOrNegative(0));
console.log(checkNestedPositiveOrNegative(11));
console.log(checkNestedPositiveOrNegative(-11));
console.log(checkNestedPositiveOrNegative(0));

let string="Hello Aai";
console.log(string.length);//length property gives the length of the string

let string1="Hello Data 123 Bye";
console.log(string1.substring(0,5).length);//substring and length

console.log(string1.charAt(string1.length));//charAt shows empty string when index>=string's length
console.log(string1[string1.length]);//[] shows undefined when index>=string's length

function concatFirstLetters(s1,s2)
{
    if(typeof(s1)==="string"&&typeof(s2)==="string")
    {
    let solution=s1.charAt(0)+s2.charAt(0);
    return solution;
    }
}

console.log(concatFirstLetters("Omkar","Alka"));

let stringdata1="Hello MyValue";
stringdata1[0]="B";
console.log(stringdata1);//String is immutable as we cannot change the value of mentioned string at a particular index.

// function mystrict()
// {
//     "use strict";
//     let stringdata="Hello1";
//     stringdata[0]="B";
//     console.log(stringdata);
   
// }

// mystrict();
let stringValue1="Omkar";
let stringValue2="Alka";
let solution1=`My mother name is ${stringValue2} and ${stringValue1} loves her
I love you Aai.Mi korda maanus nahi`;
console.log(solution1);
