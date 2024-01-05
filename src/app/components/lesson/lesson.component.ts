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
  number: number = 0;
  lesson: Lesson | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LessonService) {

    this.route.queryParamMap.subscribe(params => {
      let n = params.get('n')
      if(n === null){
        // back to home
        this.router.navigate(['/']);
      }
      else this.number = Number(n);
    });

    this.lesson = service.GetLesson(this.number)
  }
}
