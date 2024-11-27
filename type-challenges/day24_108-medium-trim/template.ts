// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/test-cases.ts
type Space = " " | "\n" | "\t";
export type Trim<S extends string> = S extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : S;

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
