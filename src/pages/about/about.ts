import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ProdutosProvider } from '../../providers/produtos/produtos';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public prodProv: ProdutosProvider
  ) {
    this.shows.push({ id: 1, icon: "ios-arrow-down", show: false }); //seminários
    this.shows.push({ id: 2, icon: "ios-arrow-down", show: false }); //preços
  }

  ionViewDidLoad() {
    this.loadProducts();
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
}
