export class Lesson
{
    constructor (
        public number: number,
        public video: string,
        public title: string,
        public subtitle: string,
        public filesList?: string[] 
    ){}
}