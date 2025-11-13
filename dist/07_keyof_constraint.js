"use strict";
// keyof --> type operator //
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "car";
console.log(myVehicle);
// ------------------------------------- //
// keyof Constraint //
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const person1 = {
    id: 123,
    name: "Sayem",
    address: {
        city: "Dhaka"
    }
};
const product1 = {
    productId: 325,
    productName: "Mobile",
    hasWarranty: false
};
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
//# sourceMappingURL=07_keyof_constraint.js.map