// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md

// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

export type TupleToUnion<T extends unknown[]> = T[number];

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
