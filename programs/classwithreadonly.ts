class Student {
    readonly studentId: number;
    name: string;
    constructor(id: number, name: string) {
        this.studentId = id;
        this.name = name;
    }
    display(): void {
        console.log("ID:", this.studentId);
        console.log("Name:", this.name);
    }
}
let s = new Student(101, "Anil");
s.display();