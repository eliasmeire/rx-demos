import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http-cache',
  templateUrl: './http-cache.component.html',
  styleUrls: ['./http-cache.component.css']
})
export class HttpCacheComponent {
  interval$ = Observable.interval(1000);

  gifUrl$: Observable<string> = this.interval$
    .flatMapTo(
      this.httpService
      .getCached('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dog')
        .map(res => res.data.image_url)
    );

  constructor(private httpService: HttpService) {}
}
