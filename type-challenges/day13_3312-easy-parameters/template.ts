// Implement the built-in Parameters generic without using it.
export type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

function baz(): void {}
type T = MyParameters<typeof baz>;
// https://github.com/microsoft/TypeScript/pull/24897
