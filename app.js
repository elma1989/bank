import { Account } from './account.js'

const accOne = new Account('Max Mustermann', 3, 'Giro-Konto');
accOne.payIn(100);
accOne.payOut(50);
accOne.getInfo();