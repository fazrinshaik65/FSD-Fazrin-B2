class Student {
    // Properties
    public name: string;
    public rollNo: number;
    public course: string;
    public marks: number;
    // Constructor Overloading
    constructor(name: string, rollNo: number);
    constructor(name: string, rollNo: number, course: string, marks: number);
    // Constructor Implementation
    constructor(name: string, rollNo: number, course?: string, marks?: number) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course ?? "B.Tech";
        this.marks = marks ?? 75;
    }
    // Method
    public getGrade(): string {
        if (this.marks >= 90) return "A";
        else if (this.marks >= 75) return "B";
        else if (this.marks >= 60) return "C";
        else return "D";
    }
    // Display Details
    public displayDetails(): void {
        console.log("----- Student Details -----");
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Course: ${this.course}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Grade: ${this.getGrade()}`);
        console.log("---------------------------");
    }
}
// Using the Class
// Default Constructor
const student1 = new Student("Rahul", 101);
// Overloaded Constructor
const student2 = new Student("Sneha", 102, "AI & DS", 92);
// Display Details
student1.displayDetails();
student2.displayDetails();
// Updating Property
student2.marks = 95;
console.log(`Updated Grade: ${student2.getGrade()}`);