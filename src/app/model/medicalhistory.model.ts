import { Inpatient } from './inpatient.model';
export class MedicalHistory{

    id:number;
    medicalCondition:string;
    sinceWhen:string;
    inpatient:Inpatient;
    constructor(){
        this.inpatient=new Inpatient();
    }

}