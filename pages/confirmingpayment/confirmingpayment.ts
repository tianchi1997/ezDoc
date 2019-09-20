import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Connect } from "../../providers/connect";
import { WelcomedocPage } from "../welcomedoc/welcomedoc";
/**
 * Generated class for the ConfirmingpaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmingpayment',
  templateUrl: 'confirmingpayment.html',
})
export class ConfirmingpaymentPage {
  users: any; 
  constructor(public navCtrl: NavController, public connect: Connect, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmingpaymentPage');
  }

  gotohome(){
    this.navCtrl.push(WelcomedocPage);
  }


}
