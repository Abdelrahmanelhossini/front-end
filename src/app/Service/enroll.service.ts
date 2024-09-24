import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enroll } from '../Models/enroll';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private apiUrl = 'https://localhost:7206/api/Enroll/all'; 
  constructor(private http:HttpClient) { }
  getAllenrolls(): Observable<enroll[]>{
    return this.http.get<enroll[]>(this.apiUrl);
  }



  
}
