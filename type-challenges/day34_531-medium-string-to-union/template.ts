// https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md
// Implement the String to Union type. Type take string argument. The output should be a union of input letters
// type StringToTuple<T> = T extends `${infer A}${infer Rest}`
//   ? [A, ...StringToTuple<Rest>]
//   : [];
// export type StringToUnion<T extends string> = StringToTuple<T>[number]

export type StringToUnion<T extends string> =
  T extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never
type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
