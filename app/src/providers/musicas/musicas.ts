import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { BaseProvider } from '../base/base';

@Injectable()
export class MusicasProvider extends BaseProvider {
  
    getPath(): string {
      return 'assets/data/musicas.json';
    }

}
