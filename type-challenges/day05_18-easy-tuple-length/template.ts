// 不能通过判断length属性 因为这里string也不行
//T extend []
// 要加readonly
// tuple knows exactly how many elements it contains, and exactly which types it contains at specific positions.
// 定死定长的数组类型
export type Length<T extends readonly any[]> = T["length"];

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
// "aaa".l
type TupleLength = tesla["length"]; //4, 长度是定死的 => 具体的值
type StringArr = string[]["length"]; //number
