let num: number = 10;
let binary: string = "";
while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
}
console.log("Binary =", binary);