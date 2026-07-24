let start: number = 1;
let end: number = 20;
console.log("Prime Numbers:");
for (let i = start; i <= end; i++) {
    let prime = true;
    if (i <= 1) {
        prime = false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime) {
        console.log(i);
    }
}