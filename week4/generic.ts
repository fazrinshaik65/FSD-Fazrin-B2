let firstItem: string = "Laptop";
let secondItem: number = 1500;
console.log("First Item:", firstItem);
console.log("Second Item Price:", secondItem);
function displayItem<T>(item: T): T {
    console.log("Item:", item);
    return item;
}
displayItem<string>("Keyboard");
displayItem<number>(2500);
let productNames: Array<string> = [
    "Laptop",
    "Mouse",
    "Keyboard"
];
console.log("Products:", productNames);
class StorageBox<T> {
    private content: T;
    constructor(item: T) {
        this.content = item;
    }
    public getItem(): T {
        console.log("Accessing stored item...");
        return this.content;
    }
    public replaceItem(newItem: T): void {
        this.content = newItem;
        console.log("Item replaced successfully.");
    }
}
const nameBox = new StorageBox<string>("Wireless Mouse");
console.log("Stored Product:", nameBox.getItem());
const priceBox = new StorageBox<number>(1800);
console.log("Stored Price:", priceBox.getItem());
priceBox.replaceItem(2200);
console.log("Updated Price:", priceBox.getItem());