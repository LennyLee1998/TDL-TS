import type { Equal, Expect } from "@type-challenges/utils";

// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md
// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
// TypeScript 的条件类型和模板字面量类型
export type TrimLeft<S extends string> = S extends `${
  | " "
  | "\n"
  | "\t"}${infer R}`
  ? TrimLeft<R>
  : S;

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
