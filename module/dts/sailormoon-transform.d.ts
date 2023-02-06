// declareファイル TypeScriptのコンパイラに変数や関数がこういう型で存在していると教えてあげて、宣言空間にそれらを定義するための構文
// アンビエント宣言

declare class Brooch {
    pentagram: string;
}
interface Compact {
    silverCrystal: boolean;
}
declare class CosmicCompact implements Compact {
    silverCrystal: boolean;
    cosmicPower: boolean;
}
declare class CrisisCompact implements Compact {
    silverCrystal: boolean;
    moonChalice: boolean;
}
declare function transform(): void;
declare function transform(item: Brooch): void;
declare function transform(item: Compact): void;
export { transform, Brooch, CosmicCompact, CrisisCompact };
