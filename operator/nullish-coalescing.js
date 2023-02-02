const users = [
  {
    name: "Patty Rabbit",
    address: {
      town: "Maple Town",
    },
  },
  {
    name: "Rolley Cocker",
    address: {},
  },
  null,
];

for (const u of users) {
    // null合体演算子(??)　左辺がnullまたはundefinedの場合に右の値を返し、それ以外の場合に左の値を返す。
    // オプショナルチェーン(?.) 参照がnull,undefinedの場合にエラーになるのではなく、undefinedが返される。　
  const user = u ?? { name: "(Somebody)" };
  const town = user?.address?.town ?? "(Somewhere)";
  console.log(`${user.name} lives in ${town}`);
}

