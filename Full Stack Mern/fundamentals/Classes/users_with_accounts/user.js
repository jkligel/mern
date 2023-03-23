const BankAccount = require('./bank_account');

class User {
    constructor(name){
        this.name = name;
        this.account = new BankAccount();
    }

    makeDeposit(amount){
        this.account.balance += amount;

        return this;
    }

    makeWithdrawal(amount){
        this.account.balance -= amount;

        return this;
    }

    displayBalance(){
        console.log(`${this.name}'s balance is $${this.account.balance}`);

        return this;
    }

    transferMoney(amount, usr){
        this.balance -= amount;
        usr.balance += amount;

        return this;
    }
}

const user1 = new User("Joseph");
const user2 = new User("Bryan");
const user3 = new User("Derek");

user1.makeDeposit(100).displayBalance();
