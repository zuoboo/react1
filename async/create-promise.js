const isSucceeded = Math.random() < 0.5;

// 第１引数が履行ハンドラ、第２引数が拒否ハンドラと呼ばれるコールバック関数
const promise = new Promise((resolve, reject) => {
    if (isSucceeded) {
        resolve('Success');
    } else {
        reject(new Error('Failure'));
    }
});

// 成功時
promise.then((value) => {
    console.log('1. ', value);

    return 'Success again';
})
.then((value) => {
    console.log('2. ', value);
})
// 失敗時
.catch((error) => {
    console.error('3. ', error);
})

// 成功時にも失敗時にもそのコールバック関数が必ず実行される
.finally(() => {
    console.log('4. ', 'Computed');
});