import { Status } from './status';
export declare class ResponseBase {
    status: Status;
    hasError: string;
    hasCustomError: string;
    count: number;
    constructor(status: Status);
}
