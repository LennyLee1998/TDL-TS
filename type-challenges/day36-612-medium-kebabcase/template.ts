// Replace the camelCase or PascalCase string with kebab-case.
import type { Equal, Expect } from "@type-challenges/utils";
// FooBarBaz -> foo-bar-baz

// 不在乎前面是大写还是小写 满足当前的为大写 且前面不为-_即可
//在乎 _-  extends uppercase
// export type KebabCase<S extends string> = S extends "-" | "😎" | ""
//   ? S
//   : S extends `${infer A}${infer Rest}`
//   ? Rest extends `${infer B}${string}`
//     ? B extends "-" | "_"
//       ? `${A}${KebabCase<Rest>}`
//       : B extends `${Uppercase<B>}`
//       ? `${Lowercase<A>}-${KebabCase<Rest>}`
//       : `${Lowercase<A>}${KebabCase<Rest>}`
//     : `${Lowercase<A>}${KebabCase<Rest>}`
//   : `${Lowercase<S>}`;
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype
// Lowercase & Uppercase => each character
// capitaliza & umcapitalize => first character
export type KebabCase<S extends string> = S extends `${infer A}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<A>}${KebabCase<Rest>}`
    : `${Lowercase<A>}-${KebabCase<Rest>}`
  : S;
type e = "-" extends Uncapitalize<"-"> ? true : false;
type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

type C = KebabCase<"ABC">;
// const c: C = "😎"
type a = "1";
type b = "2";
type d = `${a}${b}`;
