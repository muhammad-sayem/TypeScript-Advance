// type UserRoles = "Admin" | "Editor" | "Viewer";

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer"
} as const;

/*

<------------ Behind the scene ------------>

{
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",

1. typeof operator
2. keyof operator 

const user= {
 id: 222,
 name:'Mezba'
}

user['id'] >>> 222

typeof user;

{
id: number;
name:string
}

typeof UserRoles

{
 Admin: 'Admin';
 Editor: "Editor",
 Viewer: "Viewer",
}

keyof typeof UserRoles
'Admin'| 'Editor' | 'Viewer'

'ADMIN' |'EDITOR |'VIEWER'

UserRoles['Admin']  >>> 'ADMIN'
  typeof UserRoles[keyof typeof UserRoles]

}
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {  // Enum ke type hishabe o use kora jay
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  }
  else {
    return false;
  }
}

const isPermissableForEdit = canEdit(UserRoles.Editor);
console.log(isPermissableForEdit);