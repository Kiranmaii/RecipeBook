export class Recipes{
    public id: number;
    public name: string;
    public image: string;
    public directions : any;

constructor(id: number, name: string, image: string, directions : any){
    this.id = id;
    this.name = name;
    this.image = image;
    this.directions = directions;
}
}