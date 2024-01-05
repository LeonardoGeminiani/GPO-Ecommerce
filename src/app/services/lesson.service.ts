import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
    lessonList: Lesson[];

    private CurrentLesson: number = 0;

    constructor() {
        this.lessonList = [
            new Lesson(
                "../../../assets/test.mp4",
                "Domanda e offerta",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus a ante eu interdum. Vivamus erat dui, ultricies non dictum eget, dapibus vel velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque lorem eros, faucibus ut euismod id"
            ),
            new Lesson(
                "../../../assets/test.mp4",
                "Domanda e 1",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus a ante eu interdum. Vivamus erat dui, ultricies non dictum eget, dapibus vel velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque lorem eros, faucibus ut euismod id"
            )
        ];
    }

    GetLesson(number: number): Lesson | undefined {
        return this.lessonList[number-1];
    }

}