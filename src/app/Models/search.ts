import { coursegrade } from "./coursegrade";

export interface search{
    studentName:string;
    courseGrades:coursegrade[];
    totalDegrees:number;
    rank:number;
}