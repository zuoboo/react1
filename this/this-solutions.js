class Person {
    constructor(name) {
        this.name = name;
    }

    // 1.関数にインスタンスのthisを束縛
    greet1() {
        function doIt() {
            console.log(`Hi, I'm ${this.name}`);
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


}