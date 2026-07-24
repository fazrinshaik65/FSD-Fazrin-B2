let arr: number[] = [1, 2, 3, 4, 5];
let n: number = 2;
for (let i = 0; i < n; i++) {
    let first = arr.shift();
    if (first != undefined) {
        arr.push(first);
    }
}
console.log(arr);