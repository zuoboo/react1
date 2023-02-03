const user = {
    id: 3,
    name: 'Bobby Kumanov',
    username: 'bobby',
    email: 'bobby@maple.town',
};

// プロパティのキーのリストを配列で取得
console.log(Object.keys(user));
// プロパティ値のリストを配列で取得
console.log(Object.values(user));
// キーと値の両方を取得
console.log(Object.entries(user));

// キーと値のペアを反復処理の中で扱う
Object.keys(user).map((k) => { console.log(k, user[k]);});
Object.entries(user).map(([k,v]) => {console.log(k,v)});


