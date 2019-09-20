import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDiagnosisPage } from './add-diagnosis';

@NgModule({
  declarations: [
    AddDiagnosisPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDiagnosisPage),
  ],
})
export class AddDiagnosisPageModule {}
