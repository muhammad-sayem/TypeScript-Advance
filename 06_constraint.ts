// Constraint --> A constraint means a rule or restriction we put on a type or value. //

type StudentInfo = { 
  id: number,
  name: string
}

const addStudent = <T extends StudentInfo>(studentInfo: T) => {
  return {
    courseName: "Next Level Web Development",
    ...studentInfo
  }
};

/* <T extends {id: number, name: string}> means ekhane type e jai pathai na keno 
  ekhane id ar name thaktei hobe */

const studentInfo1 = {
  id: 123,
  name: "Habib",
  hasPen: true
};

const studentInfo2 = {
  id: 321,
  name: "Labib",
  hasBag: false,
  hasBike: true
}
const studentInfo3 = {
  id: 429,
  name: "Sabbir",
  hasBike: false
}

const x = addStudent(studentInfo1);
const y = addStudent(studentInfo2);
const z = addStudent(studentInfo3);

console.log(x);
console.log(y);
console.log(z);