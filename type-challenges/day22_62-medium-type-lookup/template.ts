// https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
// Sometimes, you may want to look up a type in a union by its attributes.

// In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.

export type LookUp<U extends { type: string }, T extends string> = U extends {
  type: T;
}
  ? U
  : never;

// U = Cat | Dog

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type MyDogType = LookUp<Cat | Dog, "dog">; // expected to be `Dog`

type Animal = { type: "cat"; name: string };
type Vehicle = { type: "car"; model: string };
type AllTypes = Animal | Vehicle;

// type CatType = LookUp<AllTypes, 'cat'>; // 返回 Animal
// type UnknownType = LookUp<AllTypes, 'bicycle'>; // 返回 never

type CatType = LookUp<AllTypes, "cat">; // 依然会返回 never，因为 { type: 'cat' } 并不是 AllTypes 的一个结构形式
type UnknownType = LookUp<AllTypes, "bicycle">; // 依然返回 never

type Look<U extends { type: string }, T extends string> = {
  type: T;
} extends U
  ? U
  : never;
type C = Look<{ type: "aa"; age: number } | { type: "bb"; age: string }, "aa">;

type A = { name: string } extends
  | { name: number; age: number }
  | { name: string; age: string }
  ? true
  : false;
