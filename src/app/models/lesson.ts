export class Lesson
{
    constructor (
        public video: string,
        public title: string,
        public subtitle: string,
        public googleDocIframe: string,
        public filesList?: string[]
    ){}
}