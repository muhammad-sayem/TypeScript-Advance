// Pick (jegula pick korte chai) //
type Product = {
  id: number;
  name: string;
  price: number;
  hasStock: boolean;
  color?: string
}

type ProductSummary = Pick<Product, "id" | "name" | "price">

const product1: ProductSummary = {
  id: 342,
  name: "Laptop",
  price: 80000
}
console.log("Product 1:", product1);

// ------------------------- //

// Omit (Jegula baad diye baki gula pick korte chai) //
type ProductWithoutStock = Omit<Product, "hasStock">
const product2: ProductWithoutStock = {
  id: 123,
  name: "Mobile",
  price: 20000
}
console.log("Product 2:", product2);


// ------------------------------- //

// Required (all required, optionals also) //
type ProductsWithRequired = Required<Product>
const product3: ProductsWithRequired = {
  id: 567,
  name: "TWS",
  price: 1500,
  hasStock: true,
  color: "Black"
}
console.log("Product 3: ", product3);

// ---------------------------------- //

// Partial (makes every property partial) //
type ProductWithAllPartial = Partial<Product>

// ---------------------------------- //

// Readonly //
type ReadonlyProducts = Readonly<Product>