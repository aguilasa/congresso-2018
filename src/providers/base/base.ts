import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export abstract class BaseProvider {
  data: any;

  constructor(public http: Http) { }

  private load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get(this.getPath()).map(this.process);
    }
  }

  private process(data) {
    this.data = data.json();
    return this.data;
  }

  getData() {
    return this.load().map(data => {
      return data.data;
    });
  }

  abstract getPath() : string;

}
