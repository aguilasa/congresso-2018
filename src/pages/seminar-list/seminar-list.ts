import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SeminariosProvider } from '../../providers/seminarios/seminarios';

@Component({
  selector: 'page-seminar-list',
  templateUrl: 'seminar-list.html'
})
export class SeminarListPage {

  seminarData: Array<{ title: string, details: string, icon: string, showDetails: boolean }> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public seminProv: SeminariosProvider
  ) { }

  ionViewDidLoad() {
    this.seminProv.getData().subscribe(seminars => {
      for (let seminar of seminars) {
        this.seminarData.push({
          title: seminar.title,
          details: seminar.description,
          icon: 'ios-arrow-down',
          showDetails: false
        });
      }
    });
  }

  toggleDetails(data) {
    for (let s of this.seminarData) {
      s.showDetails = false;
    }

    data.showDetails = !data.showDetails;
    data.icon = data.showDetails ? 'ios-arrow-up' : 'ios-arrow-down';
  }

}
