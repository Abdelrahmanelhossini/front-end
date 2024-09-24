import { Component, OnInit } from '@angular/core';
import { search } from '../../Models/search';
import { SearchService } from '../../Service/search.service';
import { CommonModule } from '@angular/common';

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

  constructor(private  searchservice:SearchService){}
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
}
