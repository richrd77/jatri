import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, EMPTY, Observable, catchError, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class googleFormService {

    private url: string = 'https://script.google.com/macros/s/AKfycbxHr30ObaIbIoS0qkDwwHINhe6cQJFeM8-vHdvyIgDkwFNkcp670oi53IJcknHUhHIw/exec';

    constructor(private httpClient: HttpClient) {
        this.inProgressSubject = new BehaviorSubject<boolean>(false);
    }

    private inProgressSubject: BehaviorSubject<boolean>;

    public get InProgress$(): Observable<boolean> {
        return this.inProgressSubject.asObservable();
    }

    private observer =
        {
            next: (r: any) => { console.log(r); this.inProgressSubject.next(false); },
            error: (e: any) => { console.error(e); alert('error'); this.inProgressSubject.next(false); },
            complete: () => { }
        };

    Save(type: number, number: string): void {
        this.inProgressSubject.next(true);
        this.httpClient.post(this.url, { type: type, data: { mobileNumber: number } })
            .subscribe(this.observer);
    }

    get(): Observable<any> {
        return this.httpClient.get(this.url).pipe(tap(r => this.inProgressSubject.next(false)),
            catchError(e => {
                console.error(e);
                return EMPTY;
            }))
    }
}