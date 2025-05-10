enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  gender: Gender;
};

function getPersonInfo(person: Person) {
  console.log(
    `${person.name}, ${person.age} лет, любит: ${person.hobbies.join(
      ", "
    )}. Пол: ${person.gender === Gender.MALE ? "Мужской" : "Женский"}.`
  );
}

const person1: Person = {
  name: "Денис",
  age: 25,
  hobbies: ["спорт", "чтение"],
  gender: Gender.MALE,
};

console.log(getPersonInfo(person1));
