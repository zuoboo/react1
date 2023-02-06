class Brooch {
    pentagram = 'Silver Crystal';
}

interface Compact {
    silverCrystal: boolean;
}

class CosmicCompact implements Compact {
    silverCrystal = true;
    cosmicPower = true;
}

class CrisisCompact implements Compact {
    silverCrystal = true;
    moonChalice = true;
}

interface Transform {
    (): void;
    (item: Brooch): void;
    (item: Compact): void;
}

const transform: Transform = (item?) => {
    if (item instanceof Brooch) {
        console.log('Moon crystal power, make up!!');
    } else if (item instanceof CosmicCompact) {
        console.log('Moon cosmic power, make up!!');
    } else if (item instanceof CrisisCompact) {
        console.log('Moon prisim power, make up !');
    } else {
        console.log('Item is fake');
    }
};
