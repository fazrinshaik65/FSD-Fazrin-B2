namespace StudentDetails {
    const idLength: number = 8;
    export function validateStudentId(id: string): boolean {
        const isValidFormat: boolean = /^[A-Z]{2}[0-9]{6}$/.test(id);

        return isValidFormat && id.length === idLength;
    }
    export function validateEmail(email: string): boolean {
        const emailPattern: RegExp =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        return emailPattern.test(email);
    }
    export namespace Fees {

        export function calculateGST(amount: number): number {
            return amount * 0.18;
        }
    }
}
const studentId: string = "CS123456";
const studentEmail: string = "student@gmail.com";
console.log(
    "Is Student ID Valid?",
    StudentDetails.validateStudentId(studentId)
);
console.log(
    "Is Email Valid?",
    StudentDetails.validateEmail(studentEmail)
);
const courseFee: number = 2500;
const gstAmount: number =
    StudentDetails.Fees.calculateGST(courseFee);

console.log("GST on ₹" + courseFee + " is ₹" + gstAmount);