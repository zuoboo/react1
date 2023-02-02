const original = { a: 1, b: 2, c: 3 };

// オブジェクトのコピー用途にスプレッド構文を使用
const copy = { ...original };
console.log(copy);

console.log(copy === original);

const assigned = { ...original, ...{ c: 10, d: 50}, d: 100};
console.log(assigned);
console.log(original);

