import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Connect } from "../../providers/connect";
import { AddDiagnosis3Page } from "../add-diagnosis3/add-diagnosis3";

/**
 * Generated class for the QueuePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
})
export class QueuePage {
  queueitems: any;
  users: any;
  sendernames= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public connect: Connect) {
    this.connect.getList('Queue/viewall.php', null, null).subscribe(
      data => {
        this.queueitems = data;
        console.log(data);
        this.getSenderDetails();
      }, err => {

        console.log(err);
        alert('Error');
      }
    );
  }
  selecteditem(index){
    this.navCtrl.push(AddDiagnosis3Page,{'queueitem':this.queueitems[index]});
  }
  getSenderDetails() {
    this.connect.getList('User/viewall.php', null, null).subscribe(
      data => {
        for (let i in this.queueitems) {
          var id = this.queueitems[i].sender_id;
          let obj = data.find(o => o.user_id === id);

          this.sendernames.push(obj.first_name.concat(" " + obj.last_name));
        }
      }, err => {
        console.log(err);
        alert('Error');
      }
    );

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QueuePage');
  }


}
