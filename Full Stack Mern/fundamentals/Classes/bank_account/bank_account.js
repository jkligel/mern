class BankAccount {
    constructor(intRate = 0.02, balance = 0){
        this.intRate = intRate;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;

        return this;
    }

    withdrawal(amount){
        this.balance -= amount;

        return this;
    }

    displayAccountInfo(){
        console.log(`Balance: $${this.balance}`, `Interest rate: ${this.intRate * 100}%`);
    }

    yieldInterest(){
        const factor = 1 + this.intRate;
        this.balance *= factor;

        this.balance = this.balance.toFixed(2);

        return this;
    }

}

const account1 = new BankAccount(0.10, 100);
account1.deposit(5).deposit(2).deposit(14).withdrawal(50).yieldInterest().displayAccountInfo();

const account2 = new BankAccount();
account2.deposit(20).deposit(300).withdrawal(100).withdrawal(25).withdrawal(6).withdrawal(45).yieldInterest().displayAccountInfo();