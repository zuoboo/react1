type Company = 'Apple' | 'IBM' | 'Github';

// <T>の各要素の文字列を全て小文字にする
type C1 = Lowercase<Company>;
// 全て大文字
type C2 = Uppercase<Company>;
// 頭文字を小文字にする
type C3 = Uncapitalize<Company>;
// 頭文字を大文字にする
type C4 = Capitalize<C3>;

