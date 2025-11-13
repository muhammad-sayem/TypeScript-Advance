type A = null;
type B = undefined;

type C = A extends null ? true : false;    // true
type D = A extends number ? true : false;  // false
type E = A extends number ? true : B extends undefined ? true : false  // true

// -------------------------------------- //

type ReachPeopleVehicle = {
  bike: string;
  car: string;
  ship: string
}

type CheckVehicle <T> = T extends keyof ReachPeopleVehicle ? true : false;
type hasBike = CheckVehicle<"bike">