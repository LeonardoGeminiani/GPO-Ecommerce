import { Component } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: LessonService) {
    
  }
}
