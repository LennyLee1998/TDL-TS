// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md

import { Equal } from "@type-challenges/utils";

// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.
export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type A = [{}];
type B = { a: "A" };
type c = A[number];

// 第一种写法使用了一个更严格的相等比较（Equal），确保只有在类型完全相等时才返回 true
// extends : 它在比较时不会考虑 First 和 U 是否完全相同（例如，是否是相同的字面量类型），而只检查 First 是否为 U 的子类型。

// 2. ts的模块规范
// 如果有export/import, 就是模块
// 如果没有, 就是全局的, 可以直接在别的模块引用