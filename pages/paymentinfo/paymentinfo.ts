import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { PopoverpagePage } from "../popoverpage/popoverpage";
import { ConfirmingpaymentPage } from "../confirmingpayment/confirmingpayment";



@IonicPage()
@Component({
  selector: 'page-paymentinfo',
  templateUrl: 'paymentinfo.html',
})
export class PaymentinfoPage {

  price = 99; 
  Paymenttype =  "debit card"; 
  cardnumber: any; 
  Year: any; 
  Month: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentinfoPage');
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverpagePage);
    
    popover.present({
      ev : ev
    });
    popover.onDidDismiss((action) =>{
      if (action != null) {
        this.Paymenttype = action; 
      }
    });
  }
  paymentverification(){
    var verified=true;
    //verify payment
    if(verified){
      this.navCtrl.push(ConfirmingpaymentPage);
    }
  }

}


