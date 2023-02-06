type Animal = 'cat' | 'dog' | 'rabbit';
// 第一引数の要素をキーとして、第二引数の要素を型としたオブジェクトの型を生成
type AnimalNote = Record<Animal, string>;

const animalKanji: AnimalNote = {
    cat: '猫',
    dog: '犬',
    rabbit: '兎',
};