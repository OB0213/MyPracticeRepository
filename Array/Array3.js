let arraydata=[1,2,3,4,5,6,7,8,9];
console.log(arraydata.indexOf(2));//indexOf finds the first occurence index of element

let myvalue=arraydata.join(' ');//join() joins the elements of array like string
console.log(myvalue);

arraydata=arraydata.reverse();//reverse() reverses the array
console.log(arraydata);

let arraydata1=[[1,2],[3,4],[5,6],[7,8],[[1,2,3],[4,5,6]]];
let valuedata=arraydata1.flat();
console.log(valuedata);

//Foreach method is used to iterate the elements in the array
arraydata1.forEach((element)=>{
    if(Array.isArray(element))
    {
        element.forEach((element1)=>{
           if(Array.isArray(element1))
           {
            let valuedata=element1.flat();
            console.log(valuedata);
           }
        })
    }
}

);

let arraydata2=["Omkar","Atharva","Soham","Parth","Aditya","Pruthviraj"];
arraydata2.forEach((element)=>{
    console.log(element);
});


let arraydata3=[1,2,3,4,5,6,7,8,9,10,11];

function myPrime(data)
{
    if(data<=0)
    {
        return false;
    }
    else if(data===1)
    {
        return false;
    }
    else
    {
let k=0;
for(let i=2;i<data;i++)
{
    if(data%2===0)
    {
        k++;
    }
}
if(k===0)
{
    return true;
}
else{
    return false;
}
    }
}

//filter method is used to filter the array
let finalFilterArray=arraydata3.filter((value)=>myPrime(value)===true);
console.log(finalFilterArray);
let myarraydata=["Omkar","Soham","Atharva","Parth","Ruchita","Pruthviraj"];
let finalArray=myarraydata.filter((value)=>value.length>5);
console.log(finalArray);


//includes method returns whether the element is present in an array or not

let isData=myarraydata.includes("Omkar");
console.log(isData);

//slice() method return the sliced part of the array

let myarraydatavalue=[1,2,3,4,5,6,7,8,9];
let solution=myarraydatavalue.slice(2,5);
console.log(solution);//it extracts from 2 till 4

let solution1=myarraydatavalue.slice(3);
console.log(solution1);

//splice()
let fruitsdata=["Apple","Mango","Banana","Grapes"];
fruitsdata.splice(2,0,"Pomegranate");
console.log(fruitsdata);
fruitsdata.splice(3,1,"Watermelon");
console.log(fruitsdata);

fruitsdata.splice(3,1);
console.log(fruitsdata);








