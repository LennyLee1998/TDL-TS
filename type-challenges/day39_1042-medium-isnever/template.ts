// https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
// Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.
// 为什么这里never extends never => never
// export type IsNever<T> = T extends never ? true : false;
export type IsNever<T> = [T] extends [never] ? true : false
type A = IsNever<never>; // expected to be true
type B = IsNever<number | string>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false

type G = never extends never ? true : false