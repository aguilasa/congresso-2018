import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public prodProv: ProdutosProvider,
    public horasProv: HorasProvider,
    private network: Network,
    private toast: ToastController
  ) {
    this.shows.push({ id: 1, icon: "ios-arrow-down", show: false }); //seminários
    this.shows.push({ id: 2, icon: "ios-arrow-down", show: false }); //preços
  }

  ionViewDidLoad() {
    this.loadProducts();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
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

  horas() {
    this.horasProv.getHoras().then(horas => {
      console.log(horas);
      this.toast.create({
        message: 'Ano: ' + horas.ano,
        duration: 3000
      }).present();
    }, err => {
      this.toast.create({
        message: 'Erro: ' + err,
        duration: 3000
      }).present();
    });
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }
}
