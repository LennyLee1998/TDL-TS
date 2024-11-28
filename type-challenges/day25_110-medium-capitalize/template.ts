export type MyCapitalize<S extends string> = S extends `${infer R}${infer U}`
  ? `${Uppercase<R>}${U}`
  : S;

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
