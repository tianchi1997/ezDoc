import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gpprofile',
  templateUrl: 'gpprofile.html',
})
export class GpprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpprofilePage');
  }
  save(){
    this.navCtrl.pop();
  }

}
