// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
// Implement the type version of Array.unshift
// spread syntax
export type Unshift<T extends unknown[], U> = [U, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2]
 