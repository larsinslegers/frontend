export interface TagJson {
    name: string;
  }
  export class Tag {
    constructor(
      private _name: string,
    ) {}
  
    static fromJSON(json: TagJson): Tag {
      const tag = new Tag(json.name);
      return tag;
    }
  
    toJSON(): TagJson {
      return { name: this.name };
    }
  
    get name() {
      return this._name;
    }
   
  }