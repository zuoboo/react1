const list = [4, 8, 2, 6];

// sliceでシャローコピーして破壊を防ぐ
const sortedList = list.slice().sort((n,m) => n < m ? -1 : 1);
console.log(sortedList, list);

// 空配列の中に元の配列をスプレッド構文で展開する
const reverseList = [...list].reverse();
console.log(reverseList, list);





