class Rectangle {
    // プロパティ初期化子
    readonly name = 'rectangle';
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea = () => this.sideA * this.sideB;
}

class Square {
    readonly name = 'square';
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    getArea = () => new Rectangle(this.side, this.side).getArea();
}