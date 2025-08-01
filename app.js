import { Account, SaveAccount, GiroAccount } from './account.js'

const accOne = new Account('Max Mustermann', 3, 'Giro-Konto');
accOne.payIn(100);
accOne.payOut(50);
accOne.getInfo();

console.log(`Monthly interest charges: ${accOne.calcMonthly()} €`);

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

const accTree = new GiroAccount('John Doe');
accTree.getInfo();
accTree.payIn(1000);
accTree.payOut(2000);
accTree.payOut(2000);