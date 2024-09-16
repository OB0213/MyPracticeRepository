//SHALLOW COPY
const objectdata={name:"Alka",age:51,address:"Heaven",details:{hobbies:"decoration",occupation:"doctor"}};
const myvaluedata=objectdata;
console.log(objectdata);
myvaluedata['details'].hobbies="Cooking";
myvaluedata.name="Omkar";
myvaluedata.age=25;
console.log(objectdata);
console.log(myvaluedata);

//DEEP COPY
const objectValue={name:"Omkar",age:25,hobbies:"suicide"};
let solution=JSON.parse(JSON.stringify(objectValue));
solution.hobbies="no Hobbies only death";
console.log(objectValue);
console.log(solution);

let mydatavalues={carname:"WagonR",color:"red",speed:90,details:{
    noOfWheels:4,
    carType:"Sedan"
}};

for(let x in mydatavalues)
{
   console.log(mydatavalues[x]);
}

let myvalues={name:"Omkar",age:25,surname:"Bhosale",fullname:function(){
    return this.name+" "+this.surname
}};

console.log(myvalues.fullname());
console.log(myvalues.name);
for(let x in myvalues)
{
    console.log(x);
}

let myobjectvalues={
    name:"Omkar",
    age:25,
    hobbies:["Cricket","Death"],
    address:"Mother's Feet",
    carName:"WagonR"
}

let copyObject=myobjectvalues;
console.log(myobjectvalues);
copyObject.name="Alka";
copyObject['age']=51;
copyObject.address="Heaven"
console.log(myobjectvalues);

delete myobjectvalues.hobbies;
console.log(copyObject);
console.log(myobjectvalues);

for(let x in myobjectvalues)
{
    console.log(x);
}

for(let x in copyObject)
{
    console.log(`Properties:${x}`);
}

let finalData=JSON.parse(JSON.stringify(copyObject));
console.log(finalData);
finalData.name="Alka Bhosale";
console.log("Main Object is",copyObject);
console.log("Deep Copy is",finalData);

