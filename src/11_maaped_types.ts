// Normal Mapping //
const arrayOfNum: number[] = [1, 5, 7, 3];
const arrayOfString: string[] = ['1', '5', '7', '3'];

const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

// <-------------- Mapped Types --------------> //

//! Normal !//
type AreaOfNum = {
  height: number;
  width: number
}
type height = AreaOfNum['height'];

//! Using Mapped Types !//
type AreaOfNumber = {
  [key in "height" | "width"]: number;
}