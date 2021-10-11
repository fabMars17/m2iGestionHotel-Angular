export class User {
    id : number | undefined; 
    username : string | undefined; 
    password: string | undefined;

    constructor( _id? : number | undefined, _username? : string  | undefined, _password? : string |  undefined){
        this.id = _id; 
        this.username = _username; 
        this.password = _password; 
    }
}