import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
// import { NgModel } from '@angular/forms';
import {  NgModule } from '@angular/core';
import { AddStudentComponent } from './Component/add-student/add-student.component';
import { AddEnrollmentComponent } from './Component/add-enrollment/add-enrollment.component';
import { StudentsdetailsComponent } from './Component/studentsdetails/studentsdetails.component';


export const routes: Routes = [
    {path :"HOME",component : StudentsdetailsComponent},
    {path :"addstudent",component:AddStudentComponent},
    {path :"addenrollment", component:AddEnrollmentComponent },
    {path :"students",component:HomeComponent}
     
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModuke { };

