var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
})(Gender || (Gender = {}));
function getPersonInfo(person) {
    console.log("".concat(person.name, ", ").concat(person.age, " \u043B\u0435\u0442, \u043B\u044E\u0431\u0438\u0442: ").concat(person.hobbies.join(", "), ". \u041F\u043E\u043B: ").concat(person.gender === Gender.MALE ? "Мужской" : "Женский", "."));
}
var person1 = {
    name: "Денис",
    age: 25,
    hobbies: ["спорт", "чтение"],
    gender: Gender.MALE,
};
console.log(getPersonInfo(person1));
