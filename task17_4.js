// Функции-бработчики
function processStringArray(array) {
    return array.join("");
}
function processNumberArray(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        sum += num;
    }
    return sum;
}
function processPerson(person) {
    return "".concat(person.name, ", ").concat(person.age, " years old");
}
// Тайпгварды
function isStringArray(data) {
    return Array.isArray(data) && data.every(function (item) { return typeof item === "string"; });
}
function isNumberArray(data) {
    return Array.isArray(data) && data.every(function (item) { return typeof item === "number"; });
}
function isPerson(data) {
    return (typeof data === "object" &&
        data !== null &&
        typeof data.name === "string" &&
        typeof data.age === "number");
}
// Функция
function processData(data) {
    if (isStringArray(data)) {
        return processStringArray(data);
    }
    else if (isNumberArray(data)) {
        return processNumberArray(data);
    }
    else if (isPerson(data)) {
        return processPerson(data);
    }
    else if (typeof data === "string") {
        return data.toUpperCase();
    }
    else if (typeof data === "number") {
        return Math.abs(data);
    }
    else {
        throw new Error("Unsupported data type");
    }
}
console.log(processData(["Hello,", " ", "world!"]));
console.log(processData([1, 2, 3, 4, 5]));
console.log(processData({ name: "John", age: 25 }));
console.log(processData("hello"));
console.log(processData(-25));
