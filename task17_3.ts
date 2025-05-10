function processValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * value;
  } else if (typeof value === "boolean") {
    return !value;
  }

  throw new Error("Unsupported type");
}

console.log(processValue("Hello"));
console.log(processValue(23));
console.log(processValue(true));
