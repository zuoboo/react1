const original = { a: 1, b: 2, c: 3 };

// Object.assign 第１引数のオブジェクトに、第２引数以降のオブジェクトの各プロパティを追加、上書きしていくメソッド
const copy = Object.assign({}, original);

console.log(copy);
console.log(copy === original);

const assigned = Object.assign(original, { c: 10, d: 50}, {d: 100});
console.log(assigned);
console.log(original);

