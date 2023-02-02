class Person {
    constructor(name) {
        this.name = name;
    }
};

function greet(eos) {
    console.log(`Hi, I'm ${this.name}${eos}`);
}

// call() 第１引数で渡したオブジェクトがthisになり、第２引数以降がその関数の引数として渡された上で実行される
const minky = new Person('Momo');
greet.call(minky, '!');

// bind() thisになるべきオブジェクトが設定された新しい関数を作るためのメソッド
const boundGreet = greet.bind(minky);
boundGreet('!');

minky.greet = greet;
minky.greet('!');

