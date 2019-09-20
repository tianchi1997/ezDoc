import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdddiagnosispopupPage } from '../adddiagnosispopup/adddiagnosispopup';
import { PopoverController } from 'ionic-angular';

/**
 * Generated class for the AddDiagnosis3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-diagnosis3',
  templateUrl: 'add-diagnosis3.html',
})
export class AddDiagnosis3Page {
    item: any;
    diagnoses = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
      this.item = this.navParams.get('queueitem');
      console.log("queueitem",this.item); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDiagnosis3Page');
  }
  presentPopover() {
    let popover = this.popoverCtrl.create(AdddiagnosispopupPage,{'queueitem': this.item});
    popover.present({

    });
    popover.onDidDismiss((params) => {

    });

  }
  goback(){
  this.navCtrl.pop();
  }
}
