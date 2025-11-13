const createArrayWithString = (value: string) => {
  return [value]
}

const createArrayWithNumber = (value: number) => {
  return [value]
}
const createArrayWithObj = (value: { id: number, name: string }) => {
  return [value]
}

// ----  (The upper code is for normal example with normal function) ---- //

const createArrayWithGenerics = <T>(value: T) => {
  return [value];
}

const arrString = createArrayWithGenerics("Hello");
const arrNumber = createArrayWithGenerics(187);
const arrObj = createArrayWithGenerics({ id: 187, name: "Muhammad Sayem" });

console.log(arrString);
console.log(arrNumber);
console.log(arrObj);

// ----------------------------------- //

const createArrayTuples = (param1: string, param2: { id: number, name: string }) => {
  return [param1, param2];
}

// ----  (The upper code is for normal example with normal function) ---- //

const createArrayTuplesWithGenerics = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2]
}

const res1 = createArrayTuplesWithGenerics("Hello World", { id: 187, name: "Sayem" });
const res2 = createArrayTuplesWithGenerics("Sayem", 187);

console.log(res1);
console.log(res2);

// ---------------------------- //

const addStudentToCourse = <T> (student: T) => {
  return {
    courseName: "Next Level Web Development",
    ...student
  }
};

const student1 = {
  id: 123,
  name: "Habib",
  hasPen: true
};

const student2 = {
  id: 321,
  name: "Labib",
  hasBag: false,
  hasBike: true
}

console.log("Student 1: ", student1);
console.log("Student 2: ", student2);