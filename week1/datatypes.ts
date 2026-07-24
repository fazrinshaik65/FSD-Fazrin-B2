let userName:string = "Priya";
console.log("Data type of userName->"+typeof userName);
let userAge:number = 20;
console.log("Data type of userAge->"+typeof userAge);
let isMember:boolean = true;
console.log("Data type of isMember->"+typeof isMember);
function userProfile(name:string, age:number, active:boolean):
void {
    console.log(`User:${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active?"Active":"Inactive"}`);
}
userProfile(userName,userAge,isMember);

let name1:string = "Fazrin";
let age1=19;
let isMember1:boolean = true;
userProfile(name1,age1,isMember1);

let name2:string = "Vani";
let age2=21;
let isMember2:boolean = false;
userProfile(name2,age2,isMember2);