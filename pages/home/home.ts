import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomedocPage } from '../welcomedoc/welcomedoc';
import { DetailsPage } from '../detailspage/detailspage';
import { Connect } from "../../providers/connect";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any
  email: any
  password: any
  constructor(public navCtrl: NavController, public connect: Connect, private storage: Storage) {
    this.connect.getList('User/viewall.php', null, null).subscribe(
      data => {
        this.users = data;
        console.log(data);
      }, err => {
        console.log(err);
        alert('Error');
      }
    );
  }

  authorisation(){
    //check the user credentials
    var authorised = false; 
    var error: any; 

    let obj = this.users.find(o => o.email === this.email);
    console.log(obj);
    if(obj != undefined){
      if(obj.password == this.password){
        authorised = true; 
      }
      else alert("Invalid password");
    }
    else alert("Invalid email");

    if(authorised){
      this.storage.set("user_id",obj).then(() => {
        this.navCtrl.push(WelcomedocPage);
      }); 
      
    }

  }
  signup(){
    this.navCtrl.push(DetailsPage);
  }
}
