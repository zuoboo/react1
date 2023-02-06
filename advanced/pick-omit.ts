interface Todo {
    title: string;
    description: string;
    isDone: boolean;
}

// 第一引数（Todo）から第二引数が指定するキーのプロパティだけを抽出
type PickedTodo = Pick<Todo, 'title' | 'isDone'>;
// 省く
type OmittedTodo = Omit<Todo, 'desctiption'>;

