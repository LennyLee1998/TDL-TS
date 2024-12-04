// https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
// Compute the length of a string literal, which behaves like String#length.
type StrArr<S> = S extends `${infer U}${infer R}` ? [U, ...StrArr<R>] : [];

export type LengthOfString<S extends string> = StrArr<S>["length"];

type b = ["a", "b"]["length"];
type a = LengthOfString<"Sound! Euphonium">;
