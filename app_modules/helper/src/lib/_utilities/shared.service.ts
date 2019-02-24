import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: HelperModule
})
export class SharedService {

    private subject = new Subject<any>();

    set(value: any) {
        this.subject.next(value);
    }

    clear() {
        this.subject.next();
    }

    get(): Observable<any> {
        return this.subject.asObservable();
    }

}
