// 関数宣言
{
    function add(n: number, m: number): number {
        return n + m;
    }
    console.log(add(2,4));
}

// 関数式
{
    const add = function(n: number, mk: number): number {
        return n + mk;
    };
    console.log(add(5,7));
}

// アロー関数
{
    const add = (n: number, m: number): number => n + m;
    // 何も返さない関数の戻り値はvoidになる
    const hello = (): void => {
        console.log('Hello');
    };

    console.log(add(8,1));
    hello();
}