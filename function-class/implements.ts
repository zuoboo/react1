interface Shape {
    readonly name: string;
    getArea: () => number;
}

interface Quadrangle {
    sideA: number;
    sideB?: number;
    sideC?: number;
    sideD?: number;
}

class Rectangle implements Shape, Quadrangle {
    readonly name = 'rectangle';
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea = () => this.sideA * this.sideB;
}

