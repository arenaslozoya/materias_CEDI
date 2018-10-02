import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CsPage } from './cs';

@NgModule({
  declarations: [
    CsPage,
  ],
  imports: [
    IonicPageModule.forChild(CsPage),
  ],
})
export class CsPageModule {}
