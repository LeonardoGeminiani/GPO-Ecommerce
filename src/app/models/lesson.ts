export class Lesson
{
    constructor (
        public author: string,
        public video: string,
        public aiVideo: string,
        public title: string,
        public subtitle: string,
        public googleDocIframe: {
                url: string,
                height: number
            },
        public filesList?: string[]
    ){}
}