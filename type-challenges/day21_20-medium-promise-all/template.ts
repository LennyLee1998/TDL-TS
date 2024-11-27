// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
// Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.
// 使用 declare 的目的是为了增强 TypeScript 对现有 JavaScript 代码的支持，确保类型的安全性和更好的开发体验。
// Awaited<T[K]>：对每个元素进行解析。如果某个元素是 Promise，就会将其解析为最终值。如果不是 Promise，则保持原有类型。
// TypeScript 有时可以将它们进行相互推导，尤其是在某些泛型操作的上下文中，例如在 PromiseAll 的例子中，通过映射类型转换的时候。
export declare function PromiseAll<T extends any[]>(values: [...T]): Promise<{[K in keyof T] : Awaited<T[K]>}>

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
type a = typeof promise1 extends PromiseLike<number> ? "aa" : never;
// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

function setTimeout(
  resolve: (value: string | PromiseLike<string>) => void,
  arg1: number,
  arg2: string
) {
  throw new Error("Function not implemented.");
}
type MyPromises = [Promise<number>, Promise<string>, Promise<boolean>];

type Result = {
  [key in keyof MyPromises]: Awaited<MyPromises[key]>;
};
