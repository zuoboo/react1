class Person {
    constructor(name) {
        this.name = name;
    }

    // 1.関数にインスタンスのthisを束縛
    greet1() {
        function doIt() {
            console.log(`1) Hi, I'm ${this.name}`);
        }
        const boundDoIt = doIt.bind(this);
        boundDoIt();
    }

    // 2.インスタンスのthisを渡して実行
    greet2() {
        function doIt() {
            console.log(`2) Hi, I'm ${this.name}`);
        }
        doIt.call(this);
    }

    // 3.変数_thisに値をうつしかえる。
    greet3() {
        const _this = this;
        function doIt() {
            console.log(`3) Hi, Im ${_this.name}`);
        }
        doIt()
    }

    // 4. アロー関数で定義する
    greet4() {
        const doIt = () => {
            console.log(`4) Hi, I'm ${this.name}`);
        };
        doIt();
    }

    // 5.メソッド自身もアロー関数式で定義
    greet5 = () => {
        const doIt = () => {
            console.log(`5) Hi, I'm ${this.name}`);
        };
        doIt();
    }
}

const creamy = new Person('Mami');
creamy.greet1();
creamy.greet2();
creamy.greet3();
creamy.greet4();
creamy.greet5();