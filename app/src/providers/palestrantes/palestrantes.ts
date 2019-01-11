import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { BaseProvider } from '../base/base';

@Injectable()
export class PalestrantesProvider extends BaseProvider {

  getPath(): string {
    return 'assets/data/palestrantes.json';
  }

}
