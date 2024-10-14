import { User } from "./user.model";

export class opd{
    id: number;
    name: string;
    gender: string;
    age: number;
    contactNumber: string;
    address: string;
    bloodGroup: string;
    reasonForVisit: string;
    user: User;
    constructor(){
        this.user = new User();
    }
}