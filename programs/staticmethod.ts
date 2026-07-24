class Student {
    static college: string = "ABC College";
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("College:", Student.college);
    }
    static showCollege(): void {
        console.log("College Name:", Student.college);
    }
}
let s1 = new Student("Rahul");
s1.display();
Student.showCollege();