import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { search } from '../Models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://localhost:7206/api/Search/search'; 
  constructor(private http:HttpClient) { }
  getAllSearchStudents(): Observable<search[]>{
    return this.http.get<search[]>(this.apiUrl);
  }

}
