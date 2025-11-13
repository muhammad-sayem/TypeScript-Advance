type GenericArray<T> = Array<T>

const friends: GenericArray<string> = ["Alif", "Sumon", "Sourov"];
const marks: GenericArray<number> = [53, 95, 74];
const isMarried: GenericArray<boolean> = [true, false, true];

// Direct "object" pathaile sheta type error dhorte pare na (below example) //
type UserInfo = { name: string, age: number }
const userList: GenericArray<UserInfo> = [
  {
    name: "Akib",
    age: 43
  },
  {
    name: "Faruk",
    age: 25
  }
]

// ------------------------------------- //

type Coordinate<X, Y> = [X, Y];

const coordinate1: Coordinate<number, number> = [20, 30];
console.log(coordinate1);

const coordinate2: Coordinate<string, string> = ["20", "30"];
console.log(coordinate2);