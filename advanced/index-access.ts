const permissions = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const,
};

type PermChar = keyof typeof permissions;
type PermNum = typeof permissions[PermChar];

console.log(permissions[PermChar]);

type ValueOf<T> = T[keyof T];
type PermNum = valueOf<typeof permissions>;


