export class RequestBase {

    public searchParam: any;
    public user: number;

    constructor(
        public index: number,
        public size: number,
        public takeAll: boolean,
        public isAnd: boolean,
        public orderBy: string,
        public lang: string) {

    }

}
