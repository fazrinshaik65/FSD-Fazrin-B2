// Traditional Function
function calculateArea(length: number, width: number): number {
    return length * width;
}

// Arrow Function
const calculateAreaArrow = (length: number, width: number): number => {
    return length * width;
};

//shorthand arrow function
const getCollegeName = (college: string): string =>
    `Welcome to ${college} College`;

// Example usage
const length: number = 12;
const width: number = 8;
console.log(getCollegeName("SVECW"));
const area1 = calculateArea(length, width);
console.log(`Area (Traditional): ${area1}`);
const area2 = calculateAreaArrow(length, width);
console.log(`Area (Arrow): ${area2}`);

// Traditional Function
function cube(n: number): number {
    return n * n * n;
}
// Arrow Function
const cubeArrow = (n: number): number => n * n * n;