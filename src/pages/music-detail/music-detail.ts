import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalTonePage } from '../modal-tone/modal-tone';

import { TonsProvider } from '../../providers/tons/tons';

@Component({
  selector: 'page-music-detail',
  templateUrl: 'music-detail.html'
})
export class MusicDetailPage {
  music: any;
  chords: string;
  tones: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public tonsProv: TonsProvider) {
    this.music = navParams.data;
  }

  ionViewDidLoad() {
    this.tonsProv.getData().subscribe(tones => {
      this.tones = tones;
      this.processSequences();
      this.processChords();
    });
  }

  processSequences() {
      this.tones.forEach(tone => {
        if (this.music.tone == tone.tone) {
          this.music.sequence = tone.sequence;
        }
      });
  }

  processChords() {
    this.chords = this.music.chords;
    for (let tone of this.tones) {
      if (tone.tone === this.music.tone) {
        let token: string;
        let newtoken: string;
        for (let i = 0; i < tone.sequence.length; i++) {
          token = "{" + i + "}";
          newtoken = tone.sequence[i];
          this.chords = this.replaceAll(this.chords, token, newtoken);
        }
        break;
      }
    }
  }

  replaceAll(string, token, newtoken) {
    while (string.indexOf(token) != -1) {
      string = string.replace(token, newtoken);
    }
    return string;
  }

  changeTone() {
    let modal = this.modalCtrl.create(ModalTonePage, {
      music: this.music
    });

    modal.onDidDismiss((music) => {

      this.music = music;
      this.processChords();

    });

    modal.present();
  }

}
