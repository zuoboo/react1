// 型エイリアス type alias
type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';

// 型エイリアスの構文は既に無名で作られてしまった型に参照のための別名を与えているもの
type TCurrency = {
    unit: Unit;
    amount: number;
};

// インターフェース文は型の宣言なので、その型にはオリジナルの名前が与えられる。
interface ICurrency {
    unit: Unit;
    amount: number;
}

const priceA: TCurrency = { unit: 'JPY', amount: 1000};
const priceB: ICurrency = { unit: 'USD', amount: 10};

console.log(priceA, priceB);
