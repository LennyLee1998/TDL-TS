// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
// Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F. C is expected to be either true or false while T and F can be any type.

// null在严格模式和非严格模式的区别

export type If<C extends true | false, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
// 关闭严格模式
// type C = If<null, "a", "b">;
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html
// interface Pet {
//   name: string;
// }
// class Dog {
//   name: string;
// }
// let pet: Pet;
// // OK, because of structural typing
// pet = new Dog();