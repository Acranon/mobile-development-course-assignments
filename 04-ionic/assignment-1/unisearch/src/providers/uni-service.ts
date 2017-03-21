import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UniService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UniService {
  readonly baseUrl = 'http://universities.hipolabs.com/search?';

  constructor(public http: Http) {
    
  }

  uniSearch(name) {
    return this.http.get(`${this.baseUrl}${'name='}${name}`)
            .map(res => res.json());
  }

}
