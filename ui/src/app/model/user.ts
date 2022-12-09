
export class User {
    id:number;
    email:string;
    username:string;
    password:string;
    role:string[];
    roles:string[];
    reset_token:string;
    newpassword:string;
    constructor(){}
    static role:string[]=["Admin","User"];
    static getRole(){
        return User.role;
    }
    
}
export function getRoleValueByName(name:string) {
    let roleValue = "";
    switch (name) {
        case "User":
             return roleValue =  "user";
        case  "Admin":
            return roleValue =  "admin";
    }
  
}


