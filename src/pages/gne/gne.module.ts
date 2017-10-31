import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GnePage } from './gne';

@NgModule({
  declarations: [
    GnePage,
  ],
  imports: [
    IonicPageModule.forChild(GnePage),
  ],
})
export class GnePageModule {}
