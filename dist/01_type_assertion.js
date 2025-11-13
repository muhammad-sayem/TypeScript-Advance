"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertKgToGm = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `The converted value is: ${Number(value) * 1000}`;
    }
};
const result1 = convertKgToGm(2); // We know that it will return a number must   
console.log(result1);
const result2 = convertKgToGm("2 kg"); // We know that it will return a string must 
console.log(result2);
//# sourceMappingURL=01_type_assertion.js.map