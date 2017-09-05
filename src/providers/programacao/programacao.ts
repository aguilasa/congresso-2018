import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { BaseProvider } from '../base/base';

@Injectable()
export class ProgramacaoProvider extends BaseProvider {
  
    getPath(): string {
      return 'assets/data/programacao.json';
    }

    getTimeline(dayIndex) {
      return this.getData().map(data => {
        return data[dayIndex];
      });
    }
}
