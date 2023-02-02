const patty = {
  name: "Patty Rabbit",
  email: "patty@maple.town",
  address: { town: "Maple Town" },
};

// オブジェクトだった場合は、そのオブジェクトへの参照がコピーされているだけになる
const rolley = { ...patty, name: "Rolley Cocker" };
rolley.email = "rolley@palm.town";
rolley.address.town = "Palm Town";
console.log(patty);
