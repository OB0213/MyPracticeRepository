let myobject={
    name:"Omkar",
    age:25,
    marks:89,
    surname:"Bhosale",
    fulldata:function(address)
    {
        return this.name+" "+this.surname+" "+address
    }
}

for(x in myobject)
{
    if(x==="fulldata")
    {
        console.log(myobject[x]("Pune"));
    }
    else
    {
        console.log(myobject[x]);
    }
}

myobject.fulldata=function(address,mothername)
{
    return this.name+" "+this.surname+" "+address+" "+mothername;
}

for(let x in myobject)
{
    if(x==="fulldata")
    {
        console.log(myobject[x]("Pune","Alka"));
    }
}

let mydata=Object.keys(myobject);
console.log(mydata);
for(let i=0;i<mydata.length;i++)
{
    if(mydata[i]==="fulldata")
    {
        console.log(myobject[mydata[i]]("Pune","Alka"));
    }
    else
    {
        console.log(myobject[mydata[i]]);
    }
}


//Shallow Copy
let myvalue={name:"Omkar",age:25,address:"Rahimatpur",aim:"Death"};
console.log(myvalue);
for(let x in myvalue)
{
    if(x==="aim")
    {
        delete myvalue[x];
    }
}
console.log(`Deleted Data is: ${JSON.stringify(myvalue)}`);

let copyData=myvalue;
copyData.mothername="Alka";
console.log(copyData);
console.log(myvalue);

//DEEP COPY
let deepcopy=JSON.parse(JSON.stringify(myvalue));
deepcopy.hobby="Decoration";
console.log(`DEEP COPY:${JSON.stringify(deepcopy)}`);
console.log(myvalue);

//Shallow Copy
let myarray=[1,2,3,4,5,6];
let data=myarray;
data.push(7);
console.log(data);
console.log(myarray);

//deep copy
let deepcopy1=JSON.parse(JSON.stringify(data));
deepcopy1.push(90);
console.log(deepcopy1);
console.log(myarray);