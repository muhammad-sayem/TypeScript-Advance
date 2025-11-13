// type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {  // Enum ke type hishabe o use kora jay 
  if(role === UserRoles.Admin || role === UserRoles.Editor){
    return true;
  }
  else{
    return false;
  }
}

const isPermissableForEdit = canEdit(UserRoles.Viewer);
console.log(isPermissableForEdit);