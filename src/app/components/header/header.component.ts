import { Component } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private service: LessonService) {
    
  }
}
