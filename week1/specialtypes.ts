console.log("Examples of any");
let data:any = "Hello";
console.log(data);
data=100;
console.log(data);
data=true;
console.log(data);

let value:any = true;
console.log(value);
value="Hii";
console.log(value);
value=50;
console.log(value+10);

console.log("Examples of unknown");
let num:unknown = 60;
if(typeof num === "number"){
    console.log(num+20);
}
let data1:unknown = "Hello";
if(typeof data1 === "string"){
    console.log(data1.toUpperCase());
}
let value1:unknown = true;
if(typeof value1 === "boolean"){
    console.log(value1);
}

console.log("Examples of void");
function displayName(name:string): void{
    console.log("Name:",name);
}
displayName("Fazrin");

function greet(): void{
    console.log("Hello, How are you");
}
greet();

function displayNumber(num:number): void{
    console.log("Number:",num);
}
displayNumber(100);