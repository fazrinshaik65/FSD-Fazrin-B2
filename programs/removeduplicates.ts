let str: string = "programming";
let result: string = "";
for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}
console.log("After Removing Duplicates:", result);