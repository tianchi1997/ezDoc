import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Connect } from "../../providers/connect";
import {AddDiagnosis3Page} from "../add-diagnosis3/add-diagnosis3";
import { WelcomedocPage } from "../welcomedoc/welcomedoc";
import * as moment from 'moment'; 
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AdddiagnosispopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adddiagnosispopup',
  templateUrl: 'adddiagnosispopup.html',
})
export class AdddiagnosispopupPage {
  checked= [];
  diagnoses: any;
  queueitem: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public connect:Connect, private storage:Storage) {
    this.queueitem = this.navParams.get('queueitem');  
    this.connect.getList('diagnosis/viewall.php', null, null).subscribe(
      data => {
        this.diagnoses = data;
        this.populateCheckboxes();

      }, err => {
        console.log(err);
        alert('Error');
      }
    );
  }
  populateCheckboxes(){
    for (let i in this.diagnoses){
      this.checked.push(false);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddiagnosispopupPage');
  }
  exit(){
    this.viewCtrl.dismiss(this.checked);
  }
  submit(){
    var params: any;
    var diagnosis;  
    //for the time being just take the first checked item
    for (let i in this.checked){
      if(this.checked[i]){
        diagnosis = this.diagnoses[i].diagnosis_id; 
        break; 
      }
    }
    this.storage.get("user_id").then((user) => {
      var date = moment().format('YYYY-MM-DD HH:mm:SS');
      params = {
        'date_time': date,
        'message': this.queueitem.message,
        'gp_user_id': this.queueitem.sender_id,
        'specialist_user_id': user.user_id,
        'patient_name': this.queueitem.patient_name,
        'patient_gender': this.queueitem.gender,
        'diagnoses': diagnosis, 
        'queue_id': this.queueitem.queue_id
      };
      console.log("params",params); 
      this.connect.create("Queue/create.php", params, null).subscribe(
        (data) => {
          console.log(data); 
          this.navCtrl.push(WelcomedocPage);
        },
        (err) => {
          console.log(err);
        alert("Error");
        }
      );
    }); 
    
   
  }

}
