// let COUNT = 0;

// const increment = () => {
//     return COUNT += 1;
// };

// const counter = () => {
//     let count = 0;

//     const increment = () => {
//         return count += 1;
//     };
// };

// const counter = () => {
//     let count = 0;
//     const countUp = () => {
//         return count += 1;
//     };

//     return countUp;
// };

// クロージャー

const counter = (count=0) => (adds=1) => count += adds;
const increment = counter();
