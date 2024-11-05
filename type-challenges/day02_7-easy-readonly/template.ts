// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/template.ts

// in => mapped  keyof lookup
export type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
