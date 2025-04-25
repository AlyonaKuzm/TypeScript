interface Person {
  name: string;
  age: number;
}

// Функции-бработчики

function processStringArray(array: string[]): string {
  return array.join("");
}

function processNumberArray(array: number[]): number {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
}

function processPerson(person: Person): string {
  return `${person.name}, ${person.age} years old`;
}

// Тайпгварды

function isStringArray(data: any): data is string[] {
  return Array.isArray(data) && data.every((item) => typeof item === "string");
}

function isNumberArray(data: any): data is number[] {
  return Array.isArray(data) && data.every((item) => typeof item === "number");
}

function isPerson(data: any): data is Person {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.name === "string" &&
    typeof data.age === "number"
  );
}

// Функция

function processData(
  data: string | number | string[] | number[] | Person
): string | number {
  if (isStringArray(data)) {
    return processStringArray(data);
  } else if (isNumberArray(data)) {
    return processNumberArray(data);
  } else if (isPerson(data)) {
    return processPerson(data);
  } else if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return Math.abs(data);
  } else {
    throw new Error("Unsupported data type");
  }
}

console.log(processData(["Hello,", " ", "world!"]));
console.log(processData([1, 2, 3, 4, 5]));
console.log(processData({ name: "John", age: 25 }));
console.log(processData("hello"));
console.log(processData(-25));
