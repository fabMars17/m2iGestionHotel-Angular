import { Client } from "./client";
import { Hotel } from "./hotel";

export class Resa {
    id : number | undefined; 
    client : Client | undefined;
    hotel : Hotel | undefined;
    dateStart: Date | undefined;
    dateEnd: Date | undefined;
    chambre : number | undefined;

    constructor( _id? : number, _client? : Client, _hotel? : Hotel, _datestart? : Date,  _dateend? : Date, _chambre? : number){
        this.id = _id; 
        this.client = _client;
        this.hotel = _hotel;
        this.dateStart = _datestart;
        this.dateEnd = _dateend;
        this.chambre = _chambre;
    }
}