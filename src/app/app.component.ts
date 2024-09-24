import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component'
import { FooterComponent } from "./Component/footer/footer.component";
 import { SideparComponent } from "./Component/sidepar/sidepar.component";
import { HomeComponent } from "./Component/home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './Service/student.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SideparComponent, HomeComponent,HttpClientModule,CommonModule],
  providers: [StudentService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'studentSphere';
}
