interface User {
  id: number;
  name: string;
}

interface UserWithRole extends User {
  role: string;
}

const user1: UserWithRole = {
  id: 123,
  name: "Sayem",
  role: "Admin"
}
console.log("User 1:", user1);