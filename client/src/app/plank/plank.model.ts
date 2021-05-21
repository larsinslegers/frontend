import { Tag, TagJson } from "./tag.model";

interface PlankJson {
    id: number;
    titel: string;
    materiaal: string
    tags: TagJson[];
    prijs: number;
    dikte: number;
    breedte: number;
    lengte: number;
    aantalInStock: number;
    beschrijving: string;


    
  }

export class Plank{
    private _id: number;
    constructor(
        private _titel:string, 
        private _materiaal: string,
        private _tags:Tag[],
        private _prijs: number,
        private _dikte: number,
        private _breedte: number,
        private _lengte: number,
        private _aantalInStock: number,
        private _beschrijving: string )
        {}

        get titel(): string{
            return this._titel;
        }
        get materiaal(): string{
            return this._materiaal;
        }
        get lengte(): number{
            return this._lengte;
        }
        get dikte(): number{
            return this._dikte;
        }
        get breedte(): number{
            return this._breedte;
        }
        get prijs(): number{
            return this._prijs;
        }
        get aantalInStock(): number{
            return this._aantalInStock;
        }
        get tags(): Tag[]{
            return this._tags;
        }
        get beschrijving(): string{
            return this._beschrijving
        }
        get id(): number{
            return this._id;
        }
       

        static fromJSON(jsonPlank: any): Plank {
            const pla = new Plank(
                jsonPlank.titel, 
                jsonPlank.materiaal,
                jsonPlank.tags.map(Tag.fromJSON),
                jsonPlank.prijs,
                jsonPlank.dikte,
                jsonPlank.breedte,
                jsonPlank.hoogte,
                jsonPlank.aantalInStock,
                jsonPlank.beschrijving
            );
            pla._id= jsonPlank.id;
            return pla;
        }

        toJSON(): PlankJson {
            return { 
                titel: this.titel,
                materiaal: this.materiaal,
                tags: this.tags.map(tag => tag.toJSON()),
                prijs: this.prijs,
                dikte: this.dikte,
                breedte: this.breedte,
                lengte: this.lengte,
                aantalInStock: this.aantalInStock,
                beschrijving: this.beschrijving,
                id: this.id
             };
          }
        addTag(name: string){
            this._tags.push(new Tag(name));
        }
} 