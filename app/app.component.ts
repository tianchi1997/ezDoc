import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {DetailsPage} from '../pages/detailspage/detailspage';
import { WelcomedocPage } from '../pages/welcomedoc/welcomedoc';
import { EmailverificationPage } from '../pages/emailverification/emailverification';
import { LoadingPage } from '../pages/loadingpage/loadingpage';
import { PaymentinfoPage } from '../pages/paymentinfo/paymentinfo';
import { AddDiagnosisPage } from '../pages/add-diagnosis/add-diagnosis';
import { AddDiagnosis3Page } from '../pages/add-diagnosis3/add-diagnosis3';
import { ConfirmingpaymentPage } from '../pages/confirmingpayment/confirmingpayment';
import { ContactsPage } from '../pages/contacts/contacts';
import { Newrequest1Page } from '../pages/newrequest1/newrequest1';
import { Newrequest2Page } from '../pages/newrequest2/newrequest2';
import { Newrequest3Page } from '../pages/newrequest3/newrequest3';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
