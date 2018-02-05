import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const URL = 'http://www.aguilasa.com/servicos/congresso/horas.php';

@Injectable()
export class HorasProvider {

  constructor(public http: Http) {
    
  }

  public getHoras() {
    return this.http.get(URL)
      .toPromise()
      .then(res => {
        let horas = res.json();
        return {
          hora: horas.hours,
          minuto: horas.minutes,
          dia: horas.mday,
          mes: horas.mon,
          ano: horas.year
        }
      });
  }

}
