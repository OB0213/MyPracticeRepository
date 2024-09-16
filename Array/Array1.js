let myarray=[{name:"Omkar",age:25,address:"Satara"},{name:"Atharva",age:22,address:"Satara"},{name:'Soham',age:15,address:"Pune"}];

//ITERATION OF THE ARRAY
for(let i=0;i<myarray.length;i++)
{
    console.log(myarray[i]);
}

for(let x in myarray)
{
    console.log(x);
}

for(x of myarray)
{
    console.log(x);
}

//SHALLOW COPY IN ARRAY
let arraydata=[1,2,3,4,5,6,7];
let arraydata1=arraydata;
console.log(arraydata);
arraydata1.push(6);
console.log(arraydata);
console.log(arraydata);

//DEEP COPY IN ARRAY
let arraydata2=[1,2,3,4,5,6,7,8,9,10];
let adata=JSON.parse(JSON.stringify(arraydata2));
console.log(arraydata2);
console.log(adata);
adata.push("Hello");
console.log(arraydata2);
console.log(adata);

//OBJECTS VS ARRAY
let objectdata={name:"Omkar",age:25,marks:80}
let array=[1,2,3,4,"Hello",null];
for(x in objectdata)
{
    console.log(x);//Key
}
for(x in array)
{
    console.log(x);//index as a key
}

