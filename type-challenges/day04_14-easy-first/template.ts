// https://github.com/type-challenges/type-challenges/tree/main/questions/00014-easy-first
// keys
// 1. conditional type
// export type First<T extends any[]> = T extends [] ? never : T[0];

// 2. tuple length property
// export type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 3. extends union
// value's union type
type T1 = arr2[number]; //3|2|1 [][number]//never
type T2 = 1 extends arr2[number] ? true : false;

//T[0] => undefined T[number]=> never
// undefined 不能 extends never，它们是独立的类型，并且表现出不同的行为
// export type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 4. infer 解构
export type First<T extends any[]> = T extends [infer F, ...infer Args]
  ? F
  : never;
type Tail<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : never;
type t4 = Tail<arr1>;
type arr1 = ["a", "b", "c"];
type arr2 = [];
type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
