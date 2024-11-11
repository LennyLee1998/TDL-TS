// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
// unknown比any更安全, 因为unknown代表的是有类型的
// 使用unknown时，如果你想要对其进行操作，必须首先进行类型检查或类型断言
export type Concat<
  T extends unknown[] | readonly unknown[],
  U extends unknown[] | readonly unknown[]
> = [...T, ...U];

type Result = Concat<[1], [2]>; // expected to be [1, 2]

type ArrType = [1, 2, 3];
type First<T extends unknown[]> = T extends [...infer F, infer Rest]
  ? Rest
  : never;
type ArrFirst = First<ArrType>;

// type Tail<T> = T extends []
