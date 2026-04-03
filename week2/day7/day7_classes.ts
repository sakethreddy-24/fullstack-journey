// ===== PRACTICE =====
// 1. Create a class 'BankAccount' with:
//    - private balance: number
//    - public owner: string
//    - constructor(owner, initialBalance)
//    - deposit(amount): void — adds to balance
//    - withdraw(amount): void — subtracts, but show error if insufficient funds
//    - getBalance(): number — returns current balance
// 2. Create two accounts, deposit and withdraw from them

//1.

class BankAccount {
    private balance: number;
    public owner: string;

    constructor(owner: string, initialBalance: number) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.error("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

//2.

const account1 = new BankAccount("Alice", 1000);
const account2 = new BankAccount("Bob", 500);

console.log(`${account1.owner}'s balance: ${account1.getBalance()}`);
console.log(`${account2.owner}'s balance: ${account2.getBalance()}`);

account1.deposit(200);
account2.deposit(100);

console.log(`After deposit - ${account1.owner}'s balance: ${account1.getBalance()}`);
console.log(`After deposit - ${account2.owner}'s balance: ${account2.getBalance()}`);

account1.withdraw(300);
account2.withdraw(700); // This should show error

console.log(`After withdrawal - ${account1.owner}'s balance: ${account1.getBalance()}`);
console.log(`After withdrawal - ${account2.owner}'s balance: ${account2.getBalance()}`);