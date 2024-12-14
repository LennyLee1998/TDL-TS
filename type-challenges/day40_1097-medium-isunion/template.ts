// https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md
// Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.
// 利用条件类型和类型分配的特性
export type IsUnion<T, U = T> = [T] extends [never]
  ? false // 如果T是never，直接返回false, [never] 不会触发分配
  : T extends U //触发类型分配,对于联合类型，这一步会对联合类型的每个成员单独进行类型检查 开始判断T是否是U的子类型
  ? [U] extends [T] //如果 [U] extends [T] 成立，意味着 U 完全等于 T,  如果T是U的子类型，继续判断U是否完全等于T
    ? false // 如果U完全等于T，说明不是联合类型，返回false
    : true // 如果U不完全等于T，说明是联合类型，返回true
  : never;
type case1 = IsUnion<string>; // false

// 对于 string | number：
// T 会分别被展开为 string 和 number
// 当 T 是 string 时，T extends U 成立
// 但 [U] extends [T] 不成立（因为 U 实际上是 string | number）
// 所以返回 true
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

type A = string | never extends [string | number] ? true : false;

// in不行
type B = { [K in string | never]: "aa" };

type First<T> = T extends infer U ? U : never;

type ExampleUnion = string | number | boolean;

type FirstType = First<ExampleUnion>; // string
