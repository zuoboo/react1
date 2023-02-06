
// infer  何らかの型の配列だった場合、その配列の中身の型をinfer Uで型Uとして取得
type Each<T> = T extends Array<infer U> ? U : T;

const num = 5;
const arr = [3,6,9];
type ArrEach = Each<typeof arr>;
type NumEach = Each<typeof num>;