type Permission = 'r' | 'w' | 'x';

// ユーティリティ型で、第一引数から、第二引数の要素だけを抽出する
type RW1 = Extract<Permission, 'r' | 'w'>;
// 省く
type RW2 = Exclude<Permission, 'x'>;

