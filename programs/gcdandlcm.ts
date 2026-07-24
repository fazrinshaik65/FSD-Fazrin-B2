let num1: number = 12;
let num2: number = 18;
let gcd: number = 1;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
    }
}
let lcm: number = (num1 * num2) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);