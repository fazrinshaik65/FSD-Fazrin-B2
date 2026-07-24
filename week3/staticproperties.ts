class Library {
    // Static Properties
    public static readonly libraryName: string = "Central Library";
    public static totalBooks: number = 0;
    // Readonly Properties
    public readonly bookId: string;
    public bookTitle: string;
    constructor(title: string, id: string) {
        this.bookTitle = title;
        this.bookId = id;
        // Increase total books
        Library.totalBooks++;
    }
    // Static Method
    public static showLibraryInfo(): void {
        console.log(`Library: ${Library.libraryName}`);
    }
    // Instance Method
    public showBook(): void {
        console.log(`Book: ${this.bookTitle}`);
        console.log(`Book ID: ${this.bookId}`);
    }
}
// ----- Execution -----
// Access Static Members
Library.showLibraryInfo();
// Create Objects
const book1 = new Library("TypeScript Basics", "LIB101");
const book2 = new Library("Python Programming", "LIB102");
// Display Details
book1.showBook();
book2.showBook();
// Readonly Property
console.log(book1.bookId);
// book1.bookId = "LIB999"; // Error: Cannot assign to readonly property
// Static Property
console.log(`Total Books: ${Library.totalBooks}`);