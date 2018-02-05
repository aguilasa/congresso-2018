import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BaseProvider } from '../base/base';

@Injectable()
export class SeminariosProvider extends BaseProvider {
  
    getPath(): string {
      return 'assets/data/seminarios.json';
    }

}
