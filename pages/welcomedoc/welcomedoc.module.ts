import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomedocPage } from './welcomedoc';

@NgModule({
  declarations: [
    WelcomedocPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomedocPage),
  ],
})
export class WelcomedocPageModule {}
