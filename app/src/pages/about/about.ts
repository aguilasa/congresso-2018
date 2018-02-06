import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { HorasProvider } from '../../providers/horas/horas';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  showSeminars: boolean = false;
  showPrices: boolean = false;
  seminarsIcon: string = "ios-arrow-down";
  pricesIcon: string = "ios-arrow-down";
  products: any;
  shows: Array<{ id: number, icon: string, show: boolean }> = [];
  connected: Subscription;
  disconnected: Subscription;
  isEnabled: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public prodProv: ProdutosProvider,
    public horasProv: HorasProvider,
    private network: Network,
    private toast: ToastController,
    public inAppBrowser: InAppBrowser
  ) {
    this.shows.push({ id: 1, icon: "ios-arrow-down", show: false }); //seminários
    this.shows.push({ id: 2, icon: "ios-arrow-down", show: false }); //preços
  }

  ionViewDidLoad() {
    this.loadProducts();
  }

  ionViewDidEnter() {
    this.connected = this.network.onConnect().subscribe(data => {
      this.isEnabled = true;
    });

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      this.isEnabled = false;
    });
  }

  ionViewWillLeave() {
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

  loadProducts() {
    this.prodProv.getData().subscribe(data => {
      this.products = data;
    });
  }

  showAlertKiosk(product) {
    let alert = this.alerCtrl.create({
      title: product.name,
      message: 'Onde você encontra esse produto: ' + product.kiosks,
      buttons: ['Ok']
    });
    alert.present()
  }

  togleInfo(id) {
    for (let s of this.shows) {
      if (s.id === id) {
        s.show = !s.show;
      } else {
        s.show = false;
      }
      s.icon = s.show ? 'ios-arrow-up' : 'ios-arrow-down';
    }
  }

  callEvaluation() {
    if (this.isEnabled) {
      this.horasProv.getHoras().then(horas => {
        if (horas.ano >= 2018 && horas.mes >= 2 && horas.dia >= 13) {
          this.goToEvaluation();
        } else {
          let alert = this.alerCtrl.create({
            title: "Avaliação",
            message: 'Avaliação disponível apenas a partir de 13/02/2018',
            buttons: ['Ok']
          });
          alert.present();
        }
      }, err => {
        this.toast.create({
          message: 'Erro ao abrir avaliação.',
          duration: 3000
        }).present();
      });
    } else {
      let alert = this.alerCtrl.create({
        title: "Avaliação",
        message: 'É necessário estar conectado a Internet.',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  goToEvaluation() {
    this.inAppBrowser.create(
      'https://docs.google.com/forms/d/e/1FAIpQLSchrYo2-VHY-xTohy1Bl3PTyjJlEFdo-l_IkKEK6QeyfzoXRQ/viewform',
      "_blank"
    );
  }
}
