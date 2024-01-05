import { Component } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  lessons: string[] = [];

  constructor(private service: LessonService) {
    for(let i of service.lessonList){
      this.lessons.push(i.title);
    }
  }
}
