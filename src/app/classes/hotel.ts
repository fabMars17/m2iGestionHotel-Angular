export class Hotel {
    id : number | undefined; 
    nom : string | undefined;
    etoiles : number | undefined;
    adresse: string | undefined;
    telephone: string | undefined;
    email: string | undefined;
    ville: string | undefined;

    constructor( _id? : number, _nom? : string, _etoile? : number, _adresse? : string,  _telephone? : string, _email? : string, _ville? : string){
        this.id = _id; 
        this.nom = _nom;
        this.etoiles = _etoile;
        this.adresse = _adresse;
        this.telephone = _telephone;
        this.email = _email;   
        this.ville = _ville;
    }
    
}