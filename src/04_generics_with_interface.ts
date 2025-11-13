interface Developer<T, X = null> {  // By default null if anyone has no bike 
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: number
  };
  smartWatch: T,
  bike?: X 
}

interface SmartWatch1 {
  heartbeatFeature: boolean,
  bloodPressureFeature: boolean
}

interface Bike1 {
  brand: string;
  price: number;
}

const developer1: Developer<SmartWatch1, Bike1> = {
  name: "Mr. X",
  salary: 20000,
  device: {
    brand: "Lenovo",
    model: "Y25C",
    releaseYear: 2023
  },
  smartWatch: {
    heartbeatFeature: true,
    bloodPressureFeature: false
  },
  bike: {
    brand: "Yamaha",
    price: 200000
  }
}

// ------------------------------------------- //

interface SmartWatch2 {
  heartbeatFeature: boolean,
  bloodPressureFeature: boolean,
  aiFeature: boolean,
  callingFeature: boolean
}

const developer2: Developer<SmartWatch2> = {
  name: "Mr. X",
  salary: 20000,
  device: {
    brand: "Asus",
    model: "ZP95Y",
    releaseYear: 2024
  },
  smartWatch: {
    heartbeatFeature: false,
    bloodPressureFeature: true,
    aiFeature: true,
    callingFeature: false
  },
  // bike: null
}

console.log(developer1);
console.log(developer2);