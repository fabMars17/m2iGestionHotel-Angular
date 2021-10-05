export class Client {
    id : number | undefined; 
    nom : string | undefined;
    telephone: string | undefined;
    email: string | undefined;
    adresse: string | undefined;

    constructor( _id? : number, _nom? : string, _email? : string, _telephone? : string, _adresse? : string ){
        this.id = _id; 
        this.nom = _nom; 
        this.email = _email; 
        this.telephone = _telephone;  
        this.adresse = _adresse;
    }
    
}