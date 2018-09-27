import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  constructor(public navCtrl: NavController) {

  }
  clickHistoria()
  {
    this.navCtrl.push(this.historia);
  }

}
