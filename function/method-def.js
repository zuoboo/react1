// 関数式（ = 関数リテラル）

const foo = {
    bar: 'bar',
    baz: function() {
        console.log('I am `baz` method');
    },
};

foo.baz();

// fooオブジェクトのbazプロパティはメソッド
