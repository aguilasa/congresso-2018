import { Component } from "@angular/core";

import {
  ActionSheet,
  ActionSheetController,
  Config,
  NavController
} from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";

import { PalestrantesProvider } from "../../providers/palestrantes/palestrantes";
import { SessionDetailPage } from "../session-detail/session-detail";
import { SpeakerDetailPage } from "../speaker-detail/speaker-detail";

@Component({
  selector: "page-speaker-list",
  templateUrl: "speaker-list.html"
})
export class SpeakerListPage {
  actionSheet: ActionSheet;
  speakers = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public palProv: PalestrantesProvider,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) { }

  ionViewDidLoad() {
    this.palProv.getData().subscribe(speakers => {
      this.speakers = speakers;
    });
  }

  goToSessionDetail(session) {
    this.navCtrl.push(SessionDetailPage, session);
  }

  goToSpeakerDetail(speakerName: any) {
    this.navCtrl.push(SpeakerDetailPage, speakerName);
  }

  goToSpeakerTwitter(speaker) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      "_blank"
    );
  }

  openContact(speaker) {
    let mode = this.config.get("mode");

    let actionSheet = this.actionSheetCtrl.create({
      title: "Contatar " + speaker.name,
      buttons: [
        {
          text: `${speaker.email}`,
          icon: mode !== "ios" ? "mail" : null,
          handler: () => {
            window.open("mailto:" + speaker.email);
          }
        }
      ]
    });

    actionSheet.present();
  }
}
