// Merge two types into a new type. Keys of the second type overrides keys of the first type.
// Type 'K' cannot be used to index type 'F'.
// because TypeScript needs explicit type checking to ensure type safety.
// By using K extends keyof F instead of directly indexing F[K], you're telling TypeScript that you've already checked that K exists in F before trying to access its type.
// 当使用 keyof F | keyof S 组合时，K 可能指向 S 中但不在 F 中的键。
// 使用 never 是能够捕获意外情况的一种方式
export type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};
type b = keyof foo | keyof coo;
type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
