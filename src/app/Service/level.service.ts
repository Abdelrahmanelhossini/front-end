import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Levels } from '../Models/level';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private apiUrl = 'https://localhost:7206/api/level/all'; 
  constructor(private http:HttpClient) { }
  getAlllevels(): Observable<Levels[]>{
    return this.http.get<Levels[]>(this.apiUrl);
  }

}
