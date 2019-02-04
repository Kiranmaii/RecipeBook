export class Ingredients{
    id : number;
    name: string;
    quantity: number;
    measurement: any;
    cook_time: number;
    prep_time: number;
    total_time: number
constructor(id : number,name: string , quantity: number, meas: any,
    cook_time: number, prep_time: number, total_time: number){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.measurement = meas;
    this.cook_time = cook_time;
    this.prep_time = prep_time;
    this.total_time = total_time
}
}