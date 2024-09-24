import { NgModule } from '@angular/core';
import { Component ,OnInit} from '@angular/core';
import { StudentService } from '../../Service/student.service';
import { CommonModule } from '@angular/common';
import { Student } from '../../Models/Student';
import { Courses } from '../../Models/Courses';
import { CoursesService } from '../../Service/courses.service';
import { error } from 'console';
import { EnrollService } from '../../Service/enroll.service';
import { enroll } from '../../Models/enroll';
import { LevelService } from '../../Service/level.service';
import { Levels } from '../../Models/level';
import { SearchService } from '../../Service/search.service';
import { search } from '../../Models/search';
import { DetailedsearchService } from '../../Service/detailedsearch.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers: [StudentService,CoursesService,EnrollService,LevelService,SearchService,DetailedsearchService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  students: Student[] = [];
  courses:Courses[]=[] ;
  enrolls:enroll[]=[];
  level:Levels[]=[];
  search:search[]=[];
  
  constructor(private studentService: StudentService, private coursesService : CoursesService ,private enrollService:EnrollService,
     private levelservice:LevelService,private searchservice:SearchService) {}

  ngOnInit(): void {
    // this.fetchStudents();
    // this.fetchcourses();
    // this.fetchenroll();
    // this.fetchlevel();
    this.fetchSearchStudents();
    

  }
  fetchSearchStudents() {
    this.searchservice.getAllSearchStudents().subscribe(
      (data: search[]) => {  
        this.search = data;
        console.log(this.search);
        // console.log(this.students[1].Name)
      },
      (error : any) => {
        console.error('Error fetching levels', error);
      }
    );
    
  }
  fetchlevel() {
    this.levelservice.getAlllevels().subscribe(
      (data: Levels[]) => {  
        this.level = data;
        console.log(this.level);
        // console.log(this.students[1].Name)
      },
      (error : any) => {
        console.error('Error fetching levels', error);
      }
    );
    
  }
  fetchenroll() {
    this.enrollService.getAllenrolls().subscribe(
      (data: enroll[]) => {  
        this.enrolls = data;
        console.log(this.enrolls);
        // console.log(this.students[1].Name)
      },
      (error : any) => {
        console.error('Error fetching enrolls', error);
      }
    );
  }
  fetchStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (data: Student[]) => {  
        this.students = data;
        console.log(this.students);
        // console.log(this.students[1].Name)
      },
      (error : any) => {
        console.error('Error fetching students', error);
      }
    );
  }
  fetchcourses():void{
    this.coursesService.getAllCourses().subscribe(
      (data: Courses[]) => {  
        this.courses = data;
        console.log(this.courses);
       
      },
      (error : any) => {
        console.error('Error fetching Course', error);
      }
    );
  }
}
