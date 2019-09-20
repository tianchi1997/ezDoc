import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailverificationPage } from "../emailverification/emailverification";
import { Connect } from "../../providers/connect";

/**
 * Generated class for the DetailspagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailspage',
  templateUrl: 'detailspage.html',
})
export class DetailsPage {
  name: any
  address: any
  practicename: any
  email: any
  password: any
  phonenumber: any
  providernumber: any
  speciality: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public connect: Connect) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  gotohome() {
    this.navCtrl.pop();
  }
  getUserID(){
    
  }
  gotoemail() {
    var names = this.name.split(" ");
    var params = { "first_name": names[0], "last_name": names[1], "practice_name": this.practicename, "address": this.address, "email": this.email, "password": this.password,"phone_number":this.phonenumber, "provider_number": this.providernumber, "speciality": this.speciality };
    console.log("params", params);
    this.connect.create("User/create.php", params, null).subscribe(
      (data) => {
        console.log('here');
        var user_id = this.getUserID();  
        this.navCtrl.push(EmailverificationPage);
      },
      (err) => {
        console.log(err);
        alert("Error");
      }
    );
  }

}