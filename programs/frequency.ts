let str: string = "programming";
let count: any = {};
for (let ch of str) {
    if (count[ch]) {
        count[ch]++;
    } else {
        count[ch] = 1;
    }
}
console.log(count);