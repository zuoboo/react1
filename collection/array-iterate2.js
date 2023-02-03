
// 関数型プログラミングの入り口

const arr = [1, 2, 3, 4, 5];


console.log(
    // 第２引数mにはarrの各要素が順番に入ってくる
    // 第１引数nには前回の関数の実行結果が入ってくる
    arr.reduce((n,m) => n + m),


    // 比較関数
    // 第１引数が第２引数より優先度が高い（前に並べる）場合、０未満の数値を返す。
    // 第１引数が第２引数より優先度が低い（後に並べる）場合、０より大きい数値を返す。
    // 第１引数と第２引数の優先度が同じ（ソートの必要がない）場合、０を返す。
    arr.sort((n,m) => n > m ? -1 : 1),
);



