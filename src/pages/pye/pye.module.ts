import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PyePage } from './pye';

@NgModule({
  declarations: [
    PyePage,
  ],
  imports: [
    IonicPageModule.forChild(PyePage),
  ],
})
export class PyePageModule {}
