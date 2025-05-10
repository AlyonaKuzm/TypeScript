var User = /** @class */ (function () {
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    User.prototype.login = function (username, password) {
        if (username.trim() !== "" && password.trim() !== "") {
            this.isLoggedIn = true;
            return true;
        }
        return false;
    };
    User.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    User.prototype.isAuthenticated = function () {
        return this.isLoggedIn;
    };
    return User;
}());
function authenticateAdmin(user) {
    return user.login("admin", "123");
}
var user = new User(1, "user");
// console.log(user.login("user", "111"));
// console.log(user.login("", "111"));
// console.log(user.login("user", ""));
// user.login("user", "111");
// user.logout();
// console.log(user.isAuthenticated());
// user.login("user", "pass");
console.log(user.isAuthenticated());
// user.logout();
// console.log(user.isAuthenticated());
var result = authenticateAdmin(user);
console.log(result);
console.log(user.isAuthenticated());
