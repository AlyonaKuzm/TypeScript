function validateForm(data, rules) {
    var errors = {};
    for (var key in rules) {
        var value = data[key];
        var validate = rules[key];
        if (!validate(value)) {
            if (typeof value === "string") {
                errors[key] = "\u041F\u043E\u043B\u0435 '".concat(key, "' \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
            }
            else if (typeof value === "number") {
                errors[key] = "\u041F\u043E\u043B\u0435 '".concat(key, "' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0443\u043B\u044F");
            }
            else {
                errors[key] = "\u041F\u043E\u043B\u0435 '".concat(key, "' \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u043E \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044E");
            }
        }
    }
    return errors;
}
var rules = {
    username: function (value) { return value.trim() !== ""; },
    email: function (value) { return value.trim() !== ""; },
    age: function (value) { return value > 0; },
};
var formData = {
    username: "",
    email: "user@example.com",
    age: 0,
};
var errors = validateForm(formData, rules);
console.log(errors);
