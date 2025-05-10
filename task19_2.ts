type IsArray<T> = T extends Array<any> ? true : false;

type ArrayElement<T> = T extends Array<infer U> ? U : never;

type Test1 = IsArray<number[]>; // true
type Test2 = IsArray<string>; // false

type Element1 = ArrayElement<number[]>; // number
type Element2 = ArrayElement<string>; // never
