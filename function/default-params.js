const raise = (n,m=2) => n ** m;
console.log(raise(2,3));
console.log(raise(3));

// レストパラメータ

const showNames = (a,b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
};

showNames('Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus');
