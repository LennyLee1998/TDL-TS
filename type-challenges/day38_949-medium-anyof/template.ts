// https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
// Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.
// NonNullable Constructs a type by excluding null and undefined from Type
// NonNullable<Object>：检查元素是否是非空（non-nullable）的 Object 类型。
// extends两边为union type表示两个循环
// 检查类型 T 中是否存在至少一个真值元素。
export type AnyOf<T extends any[]> = T[number] extends
  | ""
  | false
  | 0
  | []
  | { [key: string]: never }
  | undefined
  | null
  ? false
  : true;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
type Sample3 = AnyOf<[0]>; // expected to be false.

type A = null extends true ? true : false;
// "", false, [], {}, undefined, null

type AnyOfDistribute<T extends any[]> = 
  T extends (infer U)[] 
    ? U extends '' | false | 0 | [] | {[key: string]: never} | undefined | null 
      ? false 
      : true 
    : false;

    type Sample4 = AnyOfDistribute<[1, "", false, [], {}]>;