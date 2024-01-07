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
                "../../assets/DomandaEOfferta.mp4",
                "Domanda E Offerta",
                "Video lezione sul modello di mercato domanda e offerta con dimostrazione su foglio excel, a fine lezione trovate un test per verificare le competenze apprese.",
                {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfb_DYtLo32vNKZqZAvjA6Vr0v1HqBWhdOUdZDb6KM13Soy1w/viewform?embedded=true',
                    height: 2900
                },
                [
                    "../../assets/Domanda E Offerta.pdf",
                    "../../assets/Domanda E Offerta schema.pdf",
                    "../../assets/Bianchi 5F domanda e offerta.xlsx"
                ]
            ),
            new Lesson(
                "../../assets/CostiRicProfit.mp4",
                "Costi, ricavi e profitti",
                "Lezione sui costi, ricavi e profitti. Attraverso un esercizio verrà spiegato come ricavare i profitti da alcuni esempi di costi e ricavi, e ad individuarne il profitto massimo con funzioni excel.",
                {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSepEFkkzZCeLiPckhduuSRWdubIfufiCDXBz7OFG9JsnFA_qw/viewform?embedded=true',
                    height: 1300
                },
                [
                    "../../assets/Costi ricavi profitti.pdf"
                ]
            ),
            new Lesson(
                "../../assets/Video-BEP.mp4",
                "Costi e Break-even Point",
                "Lezione sui costi e sul Break-even Point. Imparerai la differenza tra costi variabili e costi fissi, i significati di ricavi, profitto e come si calcola il Break-Even Point.",
                {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLScR2l9JcgSJ9Ab2TPTMAelaXTIbocvdtWzN9muZWGg02odoBQ/viewform?embedded=true',
                    height: 3200
                },
                [
                    "../../assets/Break-even Point.pdf",
                    "../../assets/Esercizio BEP2.xlsx"
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
        router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            router.navigate(['lesson'],{
                queryParams: {
                    n : number,
                }
            });
        });
    }
}