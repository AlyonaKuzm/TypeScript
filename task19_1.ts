class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  map<M>(fn: (param: T) => M) {
    const newBoxValue = fn(this.value);

    return new Box(newBoxValue);
  }
}
const box1 = new Box(10);
const box2 = box1.map<number>((x) => x * 2);
console.log(box1, box2);

const box3 = new Box("hello");
const box4 = box3.map((str) => str.toUpperCase()); // Box<string> со значением "HELLO"
console.log(box3.getValue()); // "hello"
console.log(box4.getValue()); // "HELLO"
