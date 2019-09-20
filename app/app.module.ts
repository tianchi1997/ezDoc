import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {WelcomedocPage} from'../pages/welcomedoc/welcomedoc';
import { DetailsPage } from '../pages/detailspage/detailspage';
import { EmailverificationPage } from '../pages/emailverification/emailverification';
import { LoadingPage } from "../pages/loadingpage/loadingpage";
import { PaymentinfoPage } from "../pages/paymentinfo/paymentinfo";
import { PopoverpagePage } from "../pages/popoverpage/popoverpage";
import { AddDiagnosisPage } from '../pages/add-diagnosis/add-diagnosis';
import { AddDiagnosis3Page } from '../pages/add-diagnosis3/add-diagnosis3';
import { AdddiagnosispopupPage } from '../pages/adddiagnosispopup/adddiagnosispopup';
import { ConfirmingpaymentPage } from '../pages/confirmingpayment/confirmingpayment';
import { GpprofilePage } from '../pages/gpprofile/gpprofile';
import { ContactsPage } from '../pages/contacts/contacts';
import { Newrequest1Page } from '../pages/newrequest1/newrequest1';
import { Newrequest2Page } from '../pages/newrequest2/newrequest2';
import { Newrequest3Page } from '../pages/newrequest3/newrequest3';
import { InboxPage } from '../pages/inbox/inbox';
import { HttpModule } from '@angular/http';
import { Connect } from "../providers/connect";
import { QueuePage } from "../pages/queue/queue";
import { Camera } from '@ionic-native/camera';
//import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomedocPage,
    DetailsPage,
    EmailverificationPage,
    LoadingPage,
    PaymentinfoPage,
    PopoverpagePage,
    AddDiagnosisPage,
    AddDiagnosis3Page,
    AdddiagnosispopupPage,
    ConfirmingpaymentPage,
    GpprofilePage,
    ContactsPage,
    InboxPage,
    Newrequest1Page,
    Newrequest2Page,
    QueuePage,
    Newrequest3Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomedocPage,
    DetailsPage,
    EmailverificationPage,
    LoadingPage,
    PaymentinfoPage,
    PopoverpagePage,
    AddDiagnosisPage,
    AddDiagnosis3Page,
    AdddiagnosispopupPage,
    ConfirmingpaymentPage,
    GpprofilePage,
    ContactsPage,
    InboxPage,
    Newrequest1Page,
    Newrequest2Page,
    Newrequest3Page,
    QueuePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Connect,
    Camera
  ]
})
export class AppModule {}
