let myPlaylist=['On Top','Attention','Vikram','Sunflower','Vaathi Coming','Check Kar','Circles'];
//includes() check whether the element is present in an array or not
let mydata=myPlaylist.includes('Check Kar');
console.log(mydata);

let mydatavalue=myPlaylist.includes("Vikram",4);//Here the startIndex is 4 which is second argument as 4 is index from which it starts checking the element's presence and that argument is optional
console.log(mydatavalue);

//split() function splits string into array

let mydata1="Hello Omkar 123";
console.log(mydata1.split());//if argument is not passed then string is passed in an single array
let mydata2="Omkar Bhosale is not a good guy as he disturbed his parents and troubled them a lot and he is feeling guilty about it";
console.log(mydata2.split(" "));
