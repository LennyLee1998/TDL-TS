// https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md
// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string
// bigint 类型用户使用 n 后缀来表示大整数，如 1n。在模板字符串中，TypeScript 处理这些类型时，_ 和 n 是不影响值的，只是在字符串表示上被自动去掉。只提取出有效的绝对值数字部分，最终返回字符串表示的绝对值。
export type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer N}` ? N : `${T}`;

type Test = -1_000_000n;
type Result = Absolute<Test>; // expected to be "100"
