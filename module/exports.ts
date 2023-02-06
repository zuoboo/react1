type Species = 'rabbit' | 'bear' | 'fox' | 'dog';

interface Resident {
    name: string;
    age: number;
    species: Species;
}

// includes() 特定の要素が配列に含まれているかどうかをbooleanで返す
const isCanine = (resident: Resident): boolean => ['dog', 'fox'].includes(resident.species);
console.log(isCanine);

export{ Species, Resident, isCanine };

