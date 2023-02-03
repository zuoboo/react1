
// 高階関数
const greeter = (target) => () => console.log(`Hi, ${target}!`);

const greet = greeter('Step Jun');
greet();

