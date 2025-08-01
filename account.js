export class Account {
    static latestAccNo = 0;
    balance = 0

    constructor (owner, interestCharges, accType) {
        this.owner = owner;
        this.inerestCharges = interestCharges / 100;
        this.accType = accType
        this.accNo = ++Account.latestAccNo;
    }

    // #region Methods
        updateBalance() {
        console.log(`Balence: ${this.balance}`);
    }

    payIn(value) {
        this.balance += value;
        this.updateBalance();
    }

    payOut(value) {
        this.balance -= value;
        this.updateBalance();
    }

    getInfo() {
        console.log(`Account-Number: ${this.accNo}`);
        console.log(`Account-Type: ${this.accType}`);
        console.log(`Owner: ${this.owner}`);
        console.log(`Interes Charges: ${this.inerestCharges*100} %`);
        this.updateBalance();
    }
    // #endregion
}

