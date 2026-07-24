let binary: string = "1010";
let decimal: number = 0;
let power: number = 0;
for (let i = binary.length - 1; i >= 0; i--) {
    decimal = decimal + Number(binary[i]) * Math.pow(2, power);
    power++;
}
console.log("Decimal =", decimal);