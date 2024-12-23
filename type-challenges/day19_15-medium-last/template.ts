// https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md

// Implement a generic Last<T> that takes an Array T and returns its last element.

export type Last<T extends unknown[]> = T extends [...infer Rest, infer L]
  ? L
  : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
