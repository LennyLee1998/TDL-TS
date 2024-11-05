// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/template.ts

// type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
// in is mapped types for union type
// keyof : return union type of an type
// extends compare K & keyof T

// key: mapped types & indexed & keyof & Generic Constraints
export type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
