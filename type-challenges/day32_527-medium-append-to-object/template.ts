// https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md
// Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.
export type AppendToObject<T, U extends PropertyKey, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};

type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
