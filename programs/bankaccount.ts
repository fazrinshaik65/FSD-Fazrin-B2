class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        this.balance -= amount;
    }
    displayBalance(): void {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.displayBalance();