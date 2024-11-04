// type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
// in is for union type
// keyof : return union type of an type
//compare K & keyof T 

// key: mapped types & indexed & keyof & Generic Constraints
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

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
