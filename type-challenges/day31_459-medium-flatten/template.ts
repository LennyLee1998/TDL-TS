// https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md
// In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
//分两类 F是[] / 不是[]
export type Flatten<T extends unknown[]> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends unknown[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : T;

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
