const str = `{"id": 1, "username": "patty"}`;

// JSON.parse()は戻り値の型がanyなので、user.address.zipCodeのようなアクセスもコンパイラは通してしまうけど、実際に返ってきた値にはそんなプロパティは存在しないからエラーになる。
const user = JSON.parse(str);


console.log(user.id, user.address.zipCode);