// Variable Annotations
let studentName: string = "Alice";
let studentAge: number = 20;
let isPassed: boolean = true;
let marks: number[] = [85, 90, 78, 92];
function calculateAverage(scores: number[]): number {
    let sum: number = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}
function displayStudent(
    name: string,
    age: number,
    average: number
): void {
    console.log("Student Name:", name);
    console.log("Age:", age);
    console.log("Average Marks:", average.toFixed(2));
}
let averageMarks: number = calculateAverage(marks);
displayStudent(studentName, studentAge, averageMarks);
if (isPassed) {
    console.log(`${studentName} has passed.`);
} else {
    console.log(`${studentName} has failed.`);
}