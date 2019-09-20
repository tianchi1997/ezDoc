import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingPage } from './loadingpage';

@NgModule({
  declarations: [
    LoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingPage),
  ],
})
export class LoadingPageModule {}
