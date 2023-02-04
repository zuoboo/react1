class Point {
    x: number = 0;
    y: number = 0;
}

const pointA = new Point();
const pointB: Point = {x: 2, y: 4};

// Pointクラスをインターフェースに継承
interface Point3d extends Point {
    z: number = 0;
}

const PointC: Point3d = { x: 5, y: 5, z: 10};
console.log(PointC);

// クラスはTypeScriptにとって、型でもあり関数でもある
// インターフェース型宣言とコンストラクタ関数の宣言
