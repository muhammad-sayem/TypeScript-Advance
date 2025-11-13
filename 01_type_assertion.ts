const convertKgToGm = (input: string | number): string | number | undefined => {
  if(typeof input === "number"){
    return input*1000;
  }
  else if(typeof input === "string"){
    const [value] = input.split(" ");
    return `The converted value is: ${Number(value)*1000}`;
  }
}

const result1 = convertKgToGm(2) as number;   // We know that it will return a number must   
console.log(result1);

const result2 = convertKgToGm("2 kg") as string;    // We know that it will return a string must 
console.log(result2);