import { Observable } from 'rxjs';
export declare class SharedService {
    private subject;
    set(value: any): void;
    clear(): void;
    get(): Observable<any>;
}
