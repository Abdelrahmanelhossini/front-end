import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { search } from '../Models/search';

@Injectable({
  providedIn: 'root'
})
export class DetailedsearchService {

  private apiUrl = 'https://localhost:7206/api/Search/search'; 
  constructor(private http:HttpClient) { }
  getAllDetailedSearchStudents(): Observable<search[]>{
    return this.http.get<search[]>(this.apiUrl);
  }

}
