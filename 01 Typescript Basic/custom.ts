// Run : npx tcs 'file name'

let userName = "Abhi";

// userName = 34;
userName = "Abhi";

let userAge = 34;

let isValid = true;

// string, number, boolean

type StringOrNum = string | number;

let userID: StringOrNum = "abc1";
userID = 123;

// userID = true;

// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number; // union type
};

let user: User;

// user = 'Abhi';

user = {
  name: "Abhi",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};

// user = {};

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// {name: string; age: number}[]

hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

// type method
// type AddFn = (a: number, b: number) => number;
// function calculate(a: number, b: number, calcFn: AddFn) {
//   calcFn(a, b);
// }

calculate(2, 5, add);

interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@example.com",
};

/* 
  NOT: You can actually use 'interface' to also define function types but you for example, CAN'T use 'interface' to store 
       union type (which you can with 'type') 
*/

// for class
class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials()); // calling class

// Using 'type'
/*
  type Admin = {
    permissions: string[]
  };

  type AppUser = {
    userName: string;
  }

  type AppAdmin = Admin & AppUser;

  let admin: AppAdmin;

  admin = {
    permissions: ['login'],
    userName: 'Abhi'
  }
*/

// Using 'interface
interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Abhi",
};

// Literal Types
type Role = "admin" | "user" | "editor";

let role: Role; // 'admin', 'user', 'editor'

role = "admin";
role = "user";
role = "editor";

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

//  Generic Types
/* 
  NOT: 'Works together' simply means that a type(like 'Array') needs
  extra information ( -> e.g., the type of the values that should be
  stored in the array). 
*/

let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge({ name: "Abhi" }, { age: 34 });
