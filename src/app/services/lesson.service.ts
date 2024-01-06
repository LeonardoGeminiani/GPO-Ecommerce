import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
    lessonList: Lesson[];

    private CurrentLesson: number = 0;

    constructor() {
        this.lessonList = [
            new Lesson(
                "../../assets/Break-even point.mp4",
                "Costi e Break-even Point",
                "Lezione sui costi e sul Break-even Point. Imparerai la differenza tra costi variabili e costi fissi, i significati di ricavi, profitto e come si calcola il Break-Even Point.",
                'https://docs.google.com/forms/d/e/1FAIpQLScR2l9JcgSJ9Ab2TPTMAelaXTIbocvdtWzN9muZWGg02odoBQ/viewform?embedded=true',
                [
                    "../../assets/Break-even Point.pdf",
                    "../../assets/Riccardo Giovagnoli - BEP 2 - Foglio1.pdf"
                ]
            )
        ];
    }

    GetLesson(number: number): Lesson | undefined {
        return this.lessonList[number-1];
    }

    IsNextLesson(CurrentLesson: number): boolean {
        return this.lessonList[CurrentLesson] !== undefined;
    }

    GoToLesson(router: Router, number: number): void {
        router.navigate(['lesson'], {
            queryParams: {
                n : number,
        }});
    }

}