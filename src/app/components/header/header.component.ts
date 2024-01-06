import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  lessons: string[] = [];

  constructor(private service: LessonService, private router: Router) {
    for(let i of service.lessonList){
      this.lessons.push(i.title);
    }
  }

  GoToLesson(number: number): void {
    this.service.GoToLesson(this.router, number);
  }
}
