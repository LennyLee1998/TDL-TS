// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
// Implement the generic version of Array.push
export type Push<T extends unknown[], U> = [...T, U];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
