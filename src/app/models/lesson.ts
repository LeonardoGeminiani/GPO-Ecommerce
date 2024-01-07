export class Lesson
{
    constructor (
        public video: string,
        public title: string,
        public subtitle: string,
        public googleDocIframe: {
                url: string,
                height: number
            },
        public filesList?: string[]
    ){}
}