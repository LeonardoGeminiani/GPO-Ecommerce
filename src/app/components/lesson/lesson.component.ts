import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  number: number | undefined;
  lesson: Lesson | undefined;
  nextLesson: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LessonService) {

    this.route.queryParamMap.subscribe(params => {
      let n = params.get('n')
      this.number = n !== null ? Number(n) : undefined;
    });

    if(this.number !== undefined) {
      let l = service.GetLesson(this.number);
      if(l !== undefined) {
        this.lesson = l;
        this.nextLesson = service.IsNextLesson(this.number);
      }
    }
  } 
}
