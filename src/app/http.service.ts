import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  cachedResponses: Map<string, Observable<any>> = new Map();

  constructor(private http: Http) { }

  getCached(url: string): Observable<any> {
    if (this.cachedResponses.has(url)) {
      return this.cachedResponses.get(url);
    }

    const response$ = this.http.get(url)
      .map(res => res.json())
      .publishReplay(1, 5000)
      .refCount()
      .take(1);

    this.cachedResponses.set(url, response$);
    return response$;
  }
}
