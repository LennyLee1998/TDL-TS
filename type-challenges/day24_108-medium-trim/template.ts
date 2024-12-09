// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/test-cases.ts
type Space = " " | "\n" | "\t";
export type Trim<S extends string> = S extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : S;

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
// 装黄鳝得篓子
let a: unknown = 1;
a = "aa";
if (typeof a === "number") {
  let b: number = a;
}
// type Animal = { name: string };
// type Dog = { name: string; breed: string };

// 协变（正常情况，返回值可以是更具体的类型）
type ReturnDog = () => Dog;
type ReturnAnimal = () => Animal;

// 先定义函数
let getDog: ReturnDog = () => ({ name: "Buddy", breed: "Labrador" });
// let getAnimal: ReturnAnimal = () => ({ name: "Generic Animal" });

// 这里实际上是不被允许的
// getAnimal = getDog; // 这行在严格模式下会报类型错误

// 正确的协变体现在返回值类型上
// let canAssign: ReturnAnimal = getDog; // 这是允许的\

type Animal = { name: string; eat: () => void };
type Dog = { name: string; breed: string };

type HandleDog = (dog: Dog) => void;
type HandleAnimal = (animal: Animal) => void;

function processAnimals(handler: HandleAnimal) {
  // const animal: Animal = { name: "Generic Animal" };
  // handler(animal);
}

// 逆变体现在这里
// const dogHandler: HandleDog = (dog: Dog) => {
// console.log(dog.breed);
// };

// 这里是逆变：可以传入一个更具体类型的处理器
// processAnimals(dogHandler);

// 逆变：参数类型更广泛的函数替换更具体的函数。

// const handleAnimal = (animal: Animal) => {
//   animal.eat();
// };

// // 逆变允许：用 handleAnimal 替换 DogHandler
// const dogHandler: DogHandler = handleAnimal;

// // 调用
// dogHandler(new Dog()); // 安全！因为 handleAnimal 能处理所有 Animal 类型
interface Person {
  name: string
}
interface Guang extends Person {
  hobbies: string;
}
let printHobbies = (guang: Guang) => {
  console.log(guang.hobbies)
}
let printName = (person: Person) => {
  console.log(person.name)
}
printHobbies = printName