import { User } from "./user.model";

export class Inpatient{
    id:number;
    name:string;
    phoneNumber:number;
    gender:string;
    age:number;
    bloodgroup:string;
    address:string;
    user:User;
    constructor(){
        this.user = new User();
    }
}