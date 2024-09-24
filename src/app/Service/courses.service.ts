import { Injectable } from '@angular/core';
import { Courses } from '../Models/Courses';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = 'https://localhost:7206/api/Courses/all'; 
  constructor(private http:HttpClient) { }
  getAllCourses(): Observable<Courses[]>{
    return this.http.get<Courses[]>(this.apiUrl);
  }



}
