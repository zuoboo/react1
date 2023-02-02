const patty = {
  name: "Patty Rabbit",
  email: "patty@maple.town",
  address: { town: "Maple Town" },
};

// 一旦文字列として展開してからJSONにパースし直している
const rolley = JSON.parse(JSON.stringify(patty));
rolley.name = 'Rolley Cocker';
rolley.email = "rolley@palm.town";
rolley.address.town = "Palm Town";
console.log(patty);
