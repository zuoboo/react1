const foo = {
    name: 'Foo Object',
    dump() {
        console.log(this);
    },
};

// アクセス演算子.の前のオブジェクトがthisとして渡される
foo.dump();
