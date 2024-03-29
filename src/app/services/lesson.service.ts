import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
    lessonList: Lesson[];

    constructor() {
        this.lessonList = [
            new Lesson(
                "Bianchi Bryan Nicolas",
                "../../assets/DomandaEOfferta.mp4",
                "../../assets/Intelligenza artificiale Domanda e Offerta.mp4",
                "Domanda E Offerta",
                "Video lezione sul modello di mercato domanda e offerta con dimostrazione su foglio excel, a fine lezione trovate un test per verificare le competenze apprese.",
                {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfb_DYtLo32vNKZqZAvjA6Vr0v1HqBWhdOUdZDb6KM13Soy1w/viewform?embedded=true',
                    height: 2900
                },
                [
                    "../../assets/Domanda E Offerta.pdf",
                    "../../assets/Domanda E Offerta schema.pdf",
                    "../../assets/Bianchi 5F domanda e offerta.xlsx",
                    "../../assets/Intelligenza artificiale Domanda e Offerta.pdf"
                ]
            ),
            new Lesson(
                "Geminiani Leonardo",
                "../../assets/video-iCosti.mp4",
                "../../assets/ICostiVideoAi.mp4",
                "I Costi",
                "La lezione affronta le dinamiche aziendali relative a costi e ricavi, esplorando tre indicatori chiave di efficienza. Introduce concetti fondamentali come ricavi (R), costi (C) e profitto (P). Illustra le differenze tra costi fissi (CF), variabili (CV) e semivariabili, e discute il metodo aziendale per determinare i costi dei prodotti.",
                {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe6eqryRyXlZNPqPTtiQsKb3ISwCqC-mJgoeGb1rtWj24YUag/viewform?embedded=true',
                    height: 3000
                },
                [
                    "../../assets/I costi.pdf",
                    "../../assets/Script Lavoro i Costi.pdf"
                ]
            ),
            new Lesson(
                "Cosmi Filippo",
                "../../assets/CostiRicProfit.mp4",
                "../../assets/IACostiRicaviProfitti.mp4",
                "Costi, ricavi e profitti",
                "Lezione sui costi, ricavi e profitti. Attraverso un esercizio verrà spiegato come ricavare i profitti da alcuni esempi di costi e ricavi, e ad individuarne il profitto massimo con funzioni excel.",
                {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSepEFkkzZCeLiPckhduuSRWdubIfufiCDXBz7OFG9JsnFA_qw/viewform?embedded=true',
                    height: 1300
                },
                [
                    "../../assets/Costi ricavi profitti.pdf",
                    "../../assets/IACostiRic Profitti.pdf"
                ]
            ),
            new Lesson(
                "Alessi Tosi Diego Mario",
                "../../assets/AziendaEattVideo.mp4",
                "../../assets/aiuto intelligienza artificale per ricerca.mp4",
                "L'Azienda e le sue attività",
                "Una breve lezione dove capiremo come vengono strutturate le aziende, spiegheremo la differenza tra aziende a scopo di lucro e non, i bisogni, le fasi principali dell'attività economica e la classificazione di un'azienda.",
                {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLScdmDfJCmOq4IuM_BnqSIa2Cjn003XEHznnizMtxfC2cZiTmw/viewform?embedded=true',
                    height: 2700
                },
                [
                    "../../assets/l'azienda e le sue attività.pdf"
                ]
            ),
            new Lesson(
                "Giovagnoli Riccardo",
                "../../assets/VideoBEP.mp4",
                "../../assets/Intelligenza artificiale Break-even point.mp4",
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