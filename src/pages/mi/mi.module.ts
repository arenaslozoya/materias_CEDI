import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiPage } from './mi';

@NgModule({
  declarations: [
    MiPage,
  ],
  imports: [
    IonicPageModule.forChild(MiPage),
  ],
})
export class MiPageModule {}
