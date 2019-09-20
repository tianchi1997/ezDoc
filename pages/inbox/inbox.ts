import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Connect } from "../../providers/connect";
import { Storage } from "@ionic/storage"
/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  messages:any;
  constructor(public navCtrl: NavController, public connect: Connect, public navParams: NavParams, public http:Http, private storage:Storage) {
    this.storage.get("user_id").then((user) => {
      this.connect.getList('inbox/read.php?id='+ user.user_id, null, null).subscribe(
        data => {
          this.messages = data;
          console.log(this.messages);
        }, err => {
          console.log(err);
          alert('Error');
        }
      );
    })
    this.connect.getList('inbox/read.php?id='+2, null, null).subscribe(
      data => {
        this.messages = data;
        console.log(this.messages);
      }, err => {
        console.log(err);
        alert('Error');
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
