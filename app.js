import { Account, SaveAccount } from './account.js'

const accOne = new Account('Max Mustermann', 3, 'Giro-Konto');
accOne.payIn(100);
accOne.payOut(50);
accOne.getInfo();

console.log(accOne.calcMonthly());

let accTwo = null;

try {
    accTwo = new SaveAccount('John Doe', 1000);
} catch (err) {
    console.error(err);
}

if (accTwo) {
    accTwo.getInfo();
    accTwo.payOut(500);
}