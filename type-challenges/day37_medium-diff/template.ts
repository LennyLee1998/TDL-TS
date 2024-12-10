// https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md
// Get an Object that is the difference between O & O1
// 怎么提前处理K
// 在O中存在 并且在O1中存在就会被扔掉, 怎么得到, 取 &
// 去重
// export type Diff<O, O1> = {
//   [K in keyof O | keyof O1 as Exclude<K, keyof O & keyof O1>]: K extends keyof O
//     ? O[K]
//     : K extends keyof O1
//     ? O1[K]
//     : never;
// };
export type Diff<O, O1> = Omit<O&O1,keyof (O|O1)>


// type Diff<O, O1> = {
//   [K in
//     | Exclude<keyof O, keyof O1>
//     | Exclude<keyof O1, keyof O>]: K extends keyof O
//     ? O[K]
//     : K extends keyof O1
//     ? O1[K]
//     : never;
// };
type Foo = {
  name: string;
  age: string;
};

type Bar = {
  name: string;
  gender: number;
};
//  创建了一个union type D，意味着 D 可以是 Foo 类型或 Bar 类型。
type D = Foo|Bar
// keyof 运算符会取出联合类型中所有对象类型共同的键
type E = keyof D //name
// G 将同时包含 Foo 和 Bar 的所有属性
type G = Foo & Bar 
// type G = {
//   name: string;
//   age: string;
//   gender: number;
// }
const d:G = {
  name: "lenny",
  gender: 1,
  age: "12"
}
