let arr: number[] = [1, 2, 2, 3, 4, 3, 2];
let count: any = {};
for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]!]) {
        count[arr[i]!]++;
    } else {
        count[arr[i]!] = 1;
    }
}
console.log(count);