// keyof --> type operator //

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string
}

type MyVehicle1 = "car" | "bike" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle1 = "car";
console.log(myVehicle);

// ------------------------------------- //

// keyof Constraint //
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
}

type Person = {
  id: number;
  name: string;
  address: {
    city: string
  }
}

const person1: Person = {
  id: 123,
  name: "Sayem",
  address: {
    city: "Dhaka"
  }
}

type Product = {
  productId: number;
  productName: string;
  hasWarranty: boolean
}

const product1: Product = {
  productId: 325,
  productName: "Mobile",
  hasWarranty: false
}

// ####################### FOR EXAMPLE ####################### //
// const personName = person.name;
const pName = person1['name'];
const pId = person1['id'];
const pAddress = person1['address'];
// ####################### FOR EXAMPLE ####################### //

const personName = getPropertyFromObj(person1, "name");
console.log("Person Name:", personName);

const productName = getPropertyFromObj(product1, "productName");
console.log("Product Name:", productName);