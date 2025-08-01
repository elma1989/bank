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

    calcMonthly() {
        return Math.round(this.balance * this.inerestCharges / 12 * 100) / 100;
    }
    // #endregion
}

export class SaveAccount extends Account {
    constructor (owner, balance) {
        if (balance <= 0) {
            console.error('You have to pay in Money.');
            throw new Error('Account was not created!');
        }
        super(owner, 3, 'Save-Account');
        this.balance = balance;
    }

    payOut(value) {
        if (this.balance - value >= 0) {
            super.payOut(value);
        } else {
            console.error('Pay-Out not possible.');
            this.updateBalance();
        }
    }
}

export class GiroAccount extends Account {
    dispoLimit = 2500;
    disopInterestCharges = 0.15;

    constructor(owner) {
        super(owner, 0.5, 'Giro-Account');
    
    }

    // #region Methods
    payOut (value) {
        if (this.balance - value >= -this.dispoLimit) {
            super.payOut(value);
        } else {
            console.error('Pay-Out not possible.');
            this.updateBalance();
        }
    }

    getInfo() {
        super.getInfo();
        console.log(`Dispo-Limit: ${this.dispoLimit}`);
        console.log(`Dispo-Interest-Charges: ${this.disopInterestCharges * 100}%`);
    }
}
