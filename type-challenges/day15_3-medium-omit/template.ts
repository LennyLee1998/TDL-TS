// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K
// prefix readonly 怎么处理
// as 语法
// 这是 TypeScript 4.1 引入的键重映射（key remapping）特性
// 允许我们在映射过程中转换属性名, 允许你通过条件过滤来创建新的键：
// export type MyOmit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P];
// };
// type MyExclude<T, U> = T extends U ? never : T;
// export type MyOmit<T, K extends keyof any> = {
//   [P in MyExclude<keyof T, K>]: T[P];
// };
export type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
interface Todo {
  readonly title: string;
  description: string;
  completed: boolean;
}
// type a = Omit<>
type TodoPreview = MyOmit<Todo, "description" | "completed">;

const todo: TodoPreview = {
  title: "aa",
};
// todo.title = "bb";
