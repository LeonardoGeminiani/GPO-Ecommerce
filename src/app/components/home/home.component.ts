import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: LessonService, private router: Router) {
    
  }

  GoToLesson(number: number): void {
    this.service.GoToLesson(this.router, number);
  }
  
}
