// infer conditional type and set a variable
export type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<
  infer U
>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

// export type MyAwaited<T> = T extends PromiseLike<T> ? MyAwaited<T> : T;

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string
type Z = Promise<Promise<string | number>>;
type A = MyAwaited<Z>;
