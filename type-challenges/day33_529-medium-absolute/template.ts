// https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md
// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string
export type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer N}` ? N : `${T}`;

type Test = -1_000_000n;
type Result = Absolute<Test>; // expected to be "100"
