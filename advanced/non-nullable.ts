type T1 = NonNullable<string | number | undefined>;
type T2 = NonNullable<number[] | null | undefined>;

// コンパイルエラー
const str: T1 = undefined;
const arr: T2 = null;
