import { Status } from './status';

export class ResponseBase {

    public hasError: string;
    public hasCustomError: string;
    public count: number;

    constructor(public status: Status) { }

}
