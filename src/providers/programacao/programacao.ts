import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BaseProvider } from '../base/base';
import { PalestrantesProvider } from '../palestrantes/palestrantes';

@Injectable()
export class ProgramacaoProvider extends BaseProvider {

  private speakers = [];

  constructor(public http: Http, public palProv: PalestrantesProvider) {
    super(http);
    this.palProv.getData().subscribe(speakers => {
      this.speakers = speakers;
    });
  }

  getPath(): string {
    return 'assets/data/programacao.json';
  }

  getTimeline(dayIndex) {
    return this.getData().map(data => {
      let day: any = data[dayIndex];
      let isOn: boolean = true;

      day.groups.forEach(group => {
        // loop through each session in the timeline group
        group.sessions.forEach(session => {
          session.opt = isOn ? "even" : "odd";
          isOn = !isOn;
          session.speakers = [];
          if (session.speakerNames) {
            session.speakerNames.forEach(speakerName => {
              let speaker = this.speakers.find(s => s.name === speakerName);
              if (speaker) {
                session.speakers.push(speaker);
                speaker.sessions = speaker.sessions || [];
                speaker.sessions.push(session);
              }
            });
          }

        });
      });

      return day;
    });
  }
}
