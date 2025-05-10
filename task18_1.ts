interface Authenticable {
  login(username: string, password: string): boolean;
  logout(): void;
}

class User implements Authenticable {
  id: number;
  username: string;
  isLoggedIn: boolean;

  constructor(id: number, username: string) {
    this.id = id;
    this.username = username;
  }

  login(username: string, password: string): boolean {
    if (username.trim() !== "" && password.trim() !== "") {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

function authenticateAdmin(user: Authenticable): boolean {
  return user.login("admin", "123");
}

const user = new User(1, "user");
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

const result = authenticateAdmin(user);
console.log(result);
console.log(user.isAuthenticated());
