import { Component } from '@angular/core';

import { SeminariosProvider } from '../../providers/seminarios/seminarios';

@Component({
  selector: 'seminarios',
  templateUrl: 'seminarios.html'
})
export class SeminariosComponent {

  seminarData: Array<{ id: number, title: string, details: string, icon: string, showDetails: boolean }> = [];

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
          details: seminar.description,
          icon: 'ios-arrow-down',
          showDetails: false
        });
      }
    });
  }

  toggleSeminar(data) {
    for (let s of this.seminarData) {
      if (s.id !== data.id) {
        s.showDetails = false;
        s.icon = 'ios-arrow-down';
      }
    }

    data.showDetails = !data.showDetails;
    data.icon = data.showDetails ? 'ios-arrow-up' : 'ios-arrow-down';
  }

}
