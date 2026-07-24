//function with parameters and return type
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(15, 25));

//function with default parameter
function greetStudent(name: string = "Student"): string {
    return `Hello, ${name}`;
}
console.log(greetStudent());
console.log(greetStudent("Keerthi"));

//function with optional parameter
function displayEmployee(name: string, department?: string): void {
    console.log(`Name: ${name}`);
    if (department) {
        console.log(`Department: ${department}`);
    }
}
displayEmployee("Arjun");
displayEmployee("Arjun", "HR");

//function with rest parameters
function findSum(...values: number[]): number {
    return values.reduce((sum, value) => sum + value, 0);
}
console.log(findSum(10, 20, 30, 40));

//function with returning boolean value
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(8));

//function with void return type
function showMessage(text: string): void {
    console.log(text);
}
showMessage("TypeScript is easy to learn.");