// https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md
// Implement Replace<S, From, To> which replace the string From with To once in the given string S

export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer T}${From}${infer R}`
  ? `${T}${To}${R}`
  : S;

type replaced1 = Replace<"foobarbar", "", "foo">;
type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
