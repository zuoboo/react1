
// キーが文字列で値が数値というプロパティを持つオブジェクトの型を定義（インデックスシグネチャ）
interface Status {
[parameter: string]: number;
}

const myStatus: Status = {
    level: 22,
    experience: 3058,
    maxHP: 156,
    maxMP: 174,
    attack: 39,
    defense: 25,
};