let array=[];
//push method is used to add the element at the end of the array
array.push("Hello");
array.push(1);
array.push("Bye");
array.push("Cello");
array.push(3);
array.push(true);
console.log(array);

//unshift() adds the element at the beginning of the array
array.unshift("Omkar");
array.unshift(33);

console.log(array);

//shift() deletes the element at the beginning of the array
array.shift();
array.shift();
console.log(array);

//pop() removes the element at the end of the array

let mydata=array.pop();
console.log(mydata);
console.log(array);