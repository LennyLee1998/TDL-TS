// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
// 'readonly' type modifier is only permitted on array and tuple literal types

// export type MyReadonly2<T, K extends keyof T> = {
//   readonly [P in K]: T[P];
// } & { [U in keyof T as U extends K ? never : U]: T[U] };

// 1. 如果想单独对某些属性加readonly, 可以使用 &
//omit 和 exclude的区别
// K 将默认为 keyof T，即所有 T 的键都会被考虑为只读属性。
export type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & {
  [key in keyof Omit<T, K>]: T[key];
};

// 并且omit会保留原始的modifier, 再使用keyof依然保留
type a = keyof Omit<Todo, "title" | "description">; //排除属性 得到的还是{}
type b = Exclude<keyof Todo, "title" | "description">; //属性的union
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
