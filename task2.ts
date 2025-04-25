interface FormData {
  username: string;
  email: string;
  age: number;
}

type ValidationRules = {
  [K in keyof FormData]: (value: FormData[K]) => boolean;
};

function validateForm(
  data: FormData,
  rules: ValidationRules
): { [K in keyof FormData]?: string } {
  const errors: { [K in keyof FormData]?: string } = {};

  for (const key in rules) {
    const value = data[key];
    const validate = rules[key];
    if (!validate(value)) {
      if (typeof value === "string") {
        errors[key] = `Поле '${key}' не может быть пустым`;
      } else if (typeof value === "number") {
        errors[key] = `Поле '${key}' должно быть больше нуля`;
      } else {
        errors[key] = `Поле '${key}' не прошло валидацию`;
      }
    }
  }

  return errors;
}

const rules: ValidationRules = {
  username: (value) => value.trim() !== "",
  email: (value) => value.trim() !== "",
  age: (value) => value > 0,
};

const formData: FormData = {
  username: "",
  email: "user@example.com",
  age: 0,
};

const errors = validateForm(formData, rules);
console.log(errors);
