
// カリー化　複数の引数を取る関数を、より少ない引数を取る関数に分割して入れ子にすること

// カリー化前
{
    const multiply = (n, m) => n * m;
    console.log(multiply(2, 4));
}

// カリー化
{
    const withMultiple = (n) => {
        return(m) => n * m;
    };
    console.log(withMultiple(2)(4));
}

// アロー関数でカリー化
{
    const withMultiple = (n) => (m) => n * m;
    console.log(withMultiple(2)(4));
}

