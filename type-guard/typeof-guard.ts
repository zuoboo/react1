const foo: unknown = '1,2,3,4';


// 型をインテリジェントに絞り込んであげるとコンパイルエラーは発生しない（型ガード）
if (typeof foo === 'string') {
    console.log(foo.split(','));
}

// コンパイルエラー
console.log(foo.split(','));