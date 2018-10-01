import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DibujoPage } from './dibujo';

@NgModule({
  declarations: [
    DibujoPage,
  ],
  imports: [
    IonicPageModule.forChild(DibujoPage),
  ],
})
export class DibujoPageModule {}
