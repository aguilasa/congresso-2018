import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { BaseProvider } from '../base/base';

@Injectable()
export class TonsProvider extends BaseProvider {
  
    getPath(): string {
      return 'assets/data/tons.json';
    }

}
