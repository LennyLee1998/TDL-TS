// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md

export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]:  P;
};

// 1.typeof: TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property , connect ts and js

// 2.literal types
// constant => typeof => literal types
const str = "234";
type StrType = typeof str;

// 3. as const: tuple element can not be modified

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
