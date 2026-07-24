class LibraryBook {
    // Public
    public title: string;
    // Private
    private price: number;
    private bookCode: number;
    // Protected
    protected copies: number = 5;
    constructor(title: string, price: number, code: number) {
        this.title = title;
        this.price = price;
        this.bookCode = code;
    }
    // Public Method
    public buyBook(amount: number, code: number): void {
        if (this.checkCode(code)) {
            if (amount >= this.price) {
                console.log(`Book purchased successfully: ${this.title}`);
            } else {
                console.log("Insufficient amount.");
            }
        } else {
            console.log("Invalid Book Code.");
        }
    }
    // Private Method
    private checkCode(code: number): boolean {
        return this.bookCode === code;
    }
}
// Child Class
class PremiumLibrary extends LibraryBook {
    public addCopies(): void {
        this.copies += 10;
        console.log(`Available Copies: ${this.copies}`);
    }
}
// Execution
const book = new LibraryBook("TypeScript Guide", 450, 2025);
// Public Property
console.log(book.title);
// Public Method
book.buyBook(500, 2025);
// Child Class
const premium = new PremiumLibrary("Java Programming", 600, 3030);
premium.addCopies();