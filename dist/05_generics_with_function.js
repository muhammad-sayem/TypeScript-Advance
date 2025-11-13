"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createArrayWithString = (value) => {
    return [value];
};
const createArrayWithNumber = (value) => {
    return [value];
};
const createArrayWithObj = (value) => {
    return [value];
};
// ----  (The upper code is for normal example with normal function) ---- //
const createArrayWithGenerics = (value) => {
    return [value];
};
const arrString = createArrayWithGenerics("Hello");
const arrNumber = createArrayWithGenerics(187);
const arrObj = createArrayWithGenerics({ id: 187, name: "Muhammad Sayem" });
console.log(arrString);
console.log(arrNumber);
console.log(arrObj);
// ----------------------------------- //
const createArrayTuples = (param1, param2) => {
    return [param1, param2];
};
// ----  (The upper code is for normal example with normal function) ---- //
const createArrayTuplesWithGenerics = (param1, param2) => {
    return [param1, param2];
};
const res1 = createArrayTuplesWithGenerics("Hello World", { id: 187, name: "Sayem" });
const res2 = createArrayTuplesWithGenerics("Sayem", 187);
console.log(res1);
console.log(res2);
// ---------------------------- //
const addStudentToCourse = (student) => {
    return {
        courseName: "Next Level Web Development",
        ...student
    };
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
};
const result1 = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
console.log("Student 1: ", student1);
console.log("Student 2: ", student2);
//# sourceMappingURL=05_generics_with_function.js.map