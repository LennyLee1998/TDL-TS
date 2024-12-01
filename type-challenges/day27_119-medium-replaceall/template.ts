// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md
// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer U}`
  ? `${F}${To}${ReplaceAll<U, From, To>}`
  : S;

//   type ReplaceAll<Str, From extends string, To extends string> =
// Str extends `${infer R1}${From}${infer R2}` ? `${ReplaceAll<R1, From, To>}${To}${ReplaceAll<R2, From, To>}` : Str;

type replaced = ReplaceAll<"foobarbar", "", "foo">; // expected to be "fobarfobar"  //"fbarfbar"
