import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WelcomedocPage} from '../welcomedoc/welcomedoc';

/**
 * Generated class for the Newrequest3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newrequest3',
  templateUrl: 'newrequest3.html',
})
export class Newrequest3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newrequest3Page');
  }
  home(){
    this.navCtrl.push(WelcomedocPage);
  }
}
