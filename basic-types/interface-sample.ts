
// interface オブジェクトの型に名前をつけることができる
interface Color {
    // readonlyで書き換え不可
    readonly rgb: string;
    opacity: number;
    // ?でプロパティが省略可能になる
    alias?: string;
}

const tq: Color = {rgb: '00afcc', opacity: 1};
tq.alias = 'turquoise';
tq.rgb = '03c1ff';

