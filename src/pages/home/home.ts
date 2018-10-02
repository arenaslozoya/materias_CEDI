import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { ComPage } from '../com/com';
import { CsPage } from '../cs/cs';
import { PyePage } from '../pye/pye';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  com = ComPage;
  cs = CsPage;
  pye = PyePage;
  constructor(public navCtrl: NavController) {

  }
  clickHistoria()
  {
    this.navCtrl.push(this.historia);
  }

  clickDibujo()
  {
    this.navCtrl.push(this.dibujo);
  }

  clickCOM()
  {
    this.navCtrl.push(this.com);
  }

  clickCs()
  {
    this.navCtrl.push(this.cs);
  } 
  clickPyE()
  {
    this.navCtrl.push(this.pye);
  }
}
