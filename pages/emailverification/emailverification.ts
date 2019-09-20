import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentinfoPage } from "../paymentinfo/paymentinfo";

/**
 * Generated class for the EmailverificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emailverification',
  templateUrl: 'emailverification.html',
})
export class EmailverificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailverificationPage');
  }
  gotopayments(){
    this.navCtrl.push(PaymentinfoPage);
  }
}
