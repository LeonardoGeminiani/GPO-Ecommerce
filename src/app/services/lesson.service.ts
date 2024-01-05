import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
    lessonList: Lesson[] = [];

    constructor() {
        this.lessonList = [
            new Lesson(
                1,
                "../../../assets/test.mp4",
                "title",
                "test"
            )
        ];
    }

}