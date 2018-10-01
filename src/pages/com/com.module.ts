import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComPage } from './com';

@NgModule({
  declarations: [
    ComPage,
  ],
  imports: [
    IonicPageModule.forChild(ComPage),
  ],
})
export class ComPageModule {}
