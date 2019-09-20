import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomedocPage } from '../welcomedoc/welcomedoc';
import {Newrequest2Page} from '../newrequest2/newrequest2';

/**
 * Generated class for the Newrequest1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newrequest1',
  templateUrl: 'newrequest1.html',
})
export class Newrequest1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newrequest1Page');
  }
  newrequest2(){
    this.navCtrl.push(Newrequest2Page);
  }
  backhome(){
    this.navCtrl.pop(); 
  }
}
