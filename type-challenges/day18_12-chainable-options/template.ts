// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

// option 返回一个chainable, 并且option执行的时候要给Chainable里面加属性, 还要递归
// get要实现将属性拿出来

export type Chainable<T = {}> = {
  option: <K extends string, U>(
    key: K,
    value: U
  ) => Chainable<Omit<T, K> & Record<K, U>>;
  get():  T;
};

// 用来声明一个常量 config，并且它的类型是 Chainable。
declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
