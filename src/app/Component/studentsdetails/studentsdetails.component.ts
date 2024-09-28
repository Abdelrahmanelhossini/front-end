import { Component, OnInit } from '@angular/core';
import { search } from '../../Models/search';
import { SearchService } from '../../Service/search.service';
import { CommonModule } from '@angular/common';
import { coursegrade } from '../../Models/coursegrade';
// import { DeleteStudentService } from '../../Service/delete-student.service';
import { Student } from '../../Models/Student';
import { StudentService } from '../../Service/student.service';

@Component({
  selector: 'app-studentsdetails',
  standalone: true,
  imports: [CommonModule],
  providers:[SearchService],
  templateUrl: './studentsdetails.component.html',
  styleUrl: './studentsdetails.component.scss'
})
export class StudentsdetailsComponent implements OnInit{
  search:search[]=[];
  coursegrade:coursegrade[]=[];
  student:Student[]=[];

  constructor(private  searchservice:SearchService ,private studentservice:StudentService){}
  ngOnInit(): void {
    // this.fetchStudents();
    // this.fetchcourses();
    // this.fetchenroll();
    // this.fetchlevel();
    this.fetchSearchStudents();
    this.fetchAllStudents();
    

    

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
  
  getCourseGrade(courseName: string, courseGrades: coursegrade[]): string | Number{
    // const course = courseGrades.find(cg => cg.courseName === courseName);
    // return course ? course.degree: 'noGrade';
   
    const course = courseGrades.find(cg => cg.courseName === courseName);
    console.log(courseGrades);
   
    return course ? course.degree : '0';
     
    
  }

  fetchAllStudents() {
    this.studentservice.getAllStudents().subscribe(
      (data: Student[]) => {
        this.student = data; // تخزين الطلاب في متغير
        console.log(this.student);
      },
      (error: any) => {
        console.error('Error fetching all students', error);
      }
    );
  }
  deleteStudent(studentName: string) {
    // العثور على الطالب باستخدام اسم الطالب
    const student = this.student.find(s => s.name === studentName);
    if (student) {
      this.studentservice.deletestudent(student.studentId).subscribe(() => {
        // إزالة الطالب من القائمة المعروضة
        this.student = this.student.filter(s => s.studentId !== student.studentId);
        this.fetchAllStudents(); // جلب الطلاب مرة أخرى لتحديث القائمة
      }, error => {
        console.error('Error deleting student', error);
      });
    }
  }
}
