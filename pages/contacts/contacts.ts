import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Connect } from "../../providers/connect";
/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmingpayment',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  users: any;
  constructor(public navCtrl: NavController, public connect: Connect, public navParams: NavParams, public http:Http) {
    this.connect.getList('Contact/viewall.php', null, null).subscribe(
      data => {
        this.users = data;

      }, err => {
        console.log(err);
        alert('Error');
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

    // console.log(response);
    // this.data = response;


}
