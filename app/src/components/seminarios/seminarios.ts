import { Component } from '@angular/core';

import { SeminariosProvider } from '../../providers/seminarios/seminarios';

@Component({
  selector: 'seminarios',
  templateUrl: 'seminarios.html'
})
export class SeminariosComponent {

  seminarData: Array<{ id: number, title: string, subtitle: string, speakers: string }> = [];

  constructor(public seminProv: SeminariosProvider) {
  }

  ngOnInit() {
    this.loadSeminars();
  }

  loadSeminars() {
    this.seminProv.getData().subscribe(seminars => {
      let i: number = 0;
      for (let seminar of seminars) {
        i++;
        this.seminarData.push({
          id: i,
          title: seminar.title,
          subtitle: seminar.subtitle,
          speakers: seminar.speakers.join("<br>")
        });
      }
    });
  }

}
