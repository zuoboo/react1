
// || は左項がfalsyな値だと評価が右項に渡される。
const hello = undefined || null || 0 || NaN || "" || "Hello!";

// && は左項がtruthyな値の時に評価が右項に渡される。
const chao = " " && 100 && [] && {} && "Chao!";

true && console.log('1.', hello);
false && console.log('2', hello);
true || console.log('3.', chao);
false || console.log('4.', chao);

// ショートサーキット評価



