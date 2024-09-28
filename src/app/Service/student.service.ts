import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:7206/api/Students/all'; 
  constructor(private http:HttpClient) { }
  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }
  deletestudent(StudentId:number):Observable<void>{
    return this.http.delete<void>(`https://localhost:7206/api/Students/${StudentId}`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student); // يجب أن يتطابق هذا مع نقطة النهاية الخاصة بإضافة الطالب
  }
}
