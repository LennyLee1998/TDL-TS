// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

// export type DeepReadonly<T extends object> = {
//   readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T;
// };

export type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};

type A = ReadonlyArray<number>;
// export type DeepReadonly<T> = T extends Function
//   ? T // 忽略函数
//   : T extends Array<infer U>
//   ? ReadonlyArray<DeepReadonly<U>> // 处理数组 ??
//   : T extends object
//   ? { readonly [K in keyof T]: DeepReadonly<T[K]> } // 递归处理普通对象
//   : T; // 基本类型保持不变

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
