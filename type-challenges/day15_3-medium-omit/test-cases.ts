import type { Equal, Expect } from "@type-challenges/utils";
import type { MyOmit } from "./template";

//  TypeScript 类型系统的一个重要概念：当我们使用工具类型（如 Omit）时，它们不仅仅是简单地挑选或排除属性，而是会创建一个全新的类型。这个新类型会重新设置所有属性的修饰符状态，而不是盲目地继承原始类型的修饰符。
// 提供基础的、可组合的工具类型，让开发者能够根据具体需求灵活组合使用。
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>,
  Expect<Equal<Expected3, MyOmit<Todo1, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

interface Expected3 {
  readonly title: string;
}
