import { Resident } from './resident';

// typeとしてエクスポートされたためResidentは値として使えない
const resident = new Resident();


const patty: Resident = {
    name: 'Patty Rabbit',
    age: 8,
    species: 'rabbit',
};

console.log(patty);

