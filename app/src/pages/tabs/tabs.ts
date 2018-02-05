import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { MusicListPage } from '../music-list/music-list';
import { GameListPage } from '../game-list/game-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs: Array<any> = [
    { page: SchedulePage, icon: 'calendar' },
    { page: SpeakerListPage, icon: 'contacts' },
    { page: MusicListPage, icon: 'musical-notes' },
    { page: MapPage, icon: 'locate' },
    { page: AboutPage, icon: 'information-circle' } /*,
  { page: GameListPage, icon: 'football'  } */
  ];
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MusicListPage;
  tab4Root: any = MapPage;
  tab5Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
