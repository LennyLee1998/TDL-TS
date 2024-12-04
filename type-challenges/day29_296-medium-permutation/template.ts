// https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md
// Implement permutation type that transforms union types into the array that includes permutations of unions.
// 第一步：检查 T 是否是 never
export type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;
// type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
// 这里的 K extends K 并不是一个真正的结束条件，而是用于触发 TypeScript 的分布式条件类型（Distributive Conditional Types）。这条语句会对 K 进行遍历，并在每次递归时选取 T 中的一个成员。这种表达式常用于处理联合类型，确保 TypeScript 按照 T 中的每个成员分别进行递归。条件会继续执行，直到没有剩余的元素可供排列。当从 T 中的每个元素依次被选定并排列完毕后，它会最终到达基本情况下的 never（即所有元素均已经被排除后）。
//  首先，K 被推断为 'A'。
// 接着，会生成一个元组，包含 K 和剩余 'B' | 'C' 的排列。
// 再接着，K 被推断为 'B'，会生成包含 K（即 'B'）和剩余的 'A' | 'C' 的排列。
// 最后，K 被推断为 'C'，再生成包含 K（即 'C'）和剩余的 'A' | 'B' 的排列。
// 使用条件类型和 extends 时，尤其是涉及到联合类型时，它会导致输出也是一个联合类型。
