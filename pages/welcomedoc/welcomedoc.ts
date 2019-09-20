import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GpprofilePage } from '../gpprofile/gpprofile';
import {InboxPage} from '../inbox/inbox';
import { Newrequest1Page } from '../newrequest1/newrequest1';
import { QueuePage } from "../queue/queue";
import { Storage } from '@ionic/storage';
/**
 * Generated class for the WelcomedocPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomedoc',
  templateUrl: 'welcomedoc.html',
})
export class WelcomedocPage {
  GP = true;  
  user: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.user = this.storage.get('user_id').then((user) => {
      console.log("user",user.user_id); 
      console.log("speciality",user.speciality);
      this.GP = user.speciality == 2;  
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomedocPage');
  }
  gpprofile() {
    this.navCtrl.push(GpprofilePage);
  }
  inbox() {
    this.navCtrl.push(InboxPage);
  }
  newrequest(){
    this.navCtrl.push(Newrequest1Page);
  }
  queue(){
    this.navCtrl.push(QueuePage); 
  }
}
