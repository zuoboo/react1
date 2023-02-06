type User = { username: string; address: { zipcode: string; town: string }};

const str = `{ "username": "patty", "town": "Maple Town"}`;
const data: unknown = JSON.parse(str);
const user = data as User;

// undefinedのプロパティにアクセスしようとしてランタイムエラーが発生
console.log(user.address.town);

