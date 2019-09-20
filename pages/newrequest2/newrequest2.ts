import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Newrequest3Page} from '../newrequest3/newrequest3';
import { Connect } from "../../providers/connect";
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
//import { Camera, CameraOptions } from '@ionic-native/camera';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-newrequest2',
  templateUrl: 'newrequest2.html',
})
export class Newrequest2Page {
  public base64Image: string;
  public _zone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, _zone: NgZone, public connect: Connect, private storage: Storage){
  }
  patient_name: any
  gender: any
  message: any
  ionViewDidLoad() {
    console.log('ionViewDidLoad Newrequest2Page');
  }
  // takePhoto(){
  //   this.camera.getPicture({ quality: 80, targetWidth: 400, targetHeight: 400, cameraDirection: 1, correctOrientation: true, destinationType: 1, allowEdit: true }).then((imagePath) => {
  //     this._zone.run(() => { this.upload(imagePath); });
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  next(){
    var date = moment().format('YYYY-MM-DD HH:mm:SS');
    console.log(date);  
    var params; 
    this.storage.get("user_id").then((user) => {
      params = { 
      "sender_id": user.user_id, 
      "timestamp": date,
      "message": this.message,
      "photo_filename": "filename",
      "patient_name": this.patient_name,
      "gender": this.gender,
      };
      this.connect.create("Job/create.php", params, null).subscribe(
        (data) => {
          console.log(data); 
          this.navCtrl.push(Newrequest3Page);
        },
        (err) => {
          console.log(err);
        alert("Error");
        }
      );
    
    })
  }
//   upload(imagePath) {
//   const image_id = moment().format('x');
//     const options = {
//       fileKey: 'file',
//       fileName: 'filename',
//       chunkedMode: false,
//       mimeType: 'multipart/form-data',
//       params: { image_id: image_id }
//     };
//   const fileTransfer: FileTransferObject = this.transfer.create();
//   fileTransfer.upload('http://localhost/ezdoc_api/master/photos', 'http://localhost/ezdoc_api/master/profile.php', options)
//    .then((data) => {
//      // success
//    }, (err) => {
//      // error
//    })
// }
}
