import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pitfall-catch',
  templateUrl: './pitfall-catch.component.html',
  styleUrls: ['./pitfall-catch.component.css']
})
export class PitfallCatchComponent {
  DEFAULT_TOPIC = 'cat';
  topic$: Observable<string> = new BehaviorSubject(this.DEFAULT_TOPIC);
  gifUrl$: Observable<string> = this.topic$
    .flatMap((topic, i) => this.gifForTopic(topic, i))
    .catch(() => Observable.of('http://www.freeiconspng.com/uploads/error-icon-4.png'));

  constructor(private http: Http) { }

  gifForTopic(topic, i): Observable<Response> {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${topic}`;
    return i === 2
      ? Observable.throw({ error: 'Fake http error' })
      : this.http.get(url)
        .map(res => res.json())
        .map(res => res.data.image_url);
  }
}

