import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popoverpage',
  templateUrl: 'popoverpage.html',
})
export class PopoverpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverpagePage');
  }
  close(params){
    this.viewCtrl.dismiss(params);
  }
}
