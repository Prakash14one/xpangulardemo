
import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule ,
  MatCheckboxModule 
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {ProviderActiveSowDialogComponent} from './shared/_components/provider-active-sow-dialog/provider-active-sow-dialog.component';



import { appRoutes } from './app-routing';
import { NgModule } from '@angular/core';

//  modules 
import { OwlModule } from 'ngx-owl-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// material module 
import { MatSelectModule } from '@angular/material/select';

// components 
import { ConsumerModule } from './components/consumer/consumer.module';
import { LandingComponent } from '../app/components/landing/landing.component';
import { ServiceDialogBoxComponent } from '../app/shared/_components/servicedialogbox/servicedialogbox.component';
import { VideoDialogboxComponent } from './core/video/video-dialogbox/video-dialogbox.component';
import { VideosComponent } from './components/videos/videos.component';
import { CalendarDialogboxComponent } from './components/calendar-page/components/calendar-dialogbox/calendar-dialogbox.component';
import { AddEventDialogboxComponent } from './components/calendar-page/components/add-event-dialogbox/add-event-dialogbox.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CharityComponent } from './components/pages/charity/charity.component';
import { ServiceProviderComponent } from './components/pages/service-provider/service-provider.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BidListDialogBoxComponent } from '../app/shared/_components/bidlistdialogbox/bidlistdialogbox.component';
// pipes
import { TruncatePipe } from './shared/_pipes/str-limit.pipe';
import { AsFormArrayPipe } from './shared/_pipes/form-array.pipe';
import { BidMessageDialogBoxComponent } from '../app/shared/_components/bidmessagedialogbox/bidmessagedialogbox.component';
import { BidAppointmentDialogBoxComponent } from '../app/shared/_components/bidappointmentdialogbox/bidappointmentdialogbox.component';
import { BidSowDialogBoxComponent } from '../app/shared/_components/bidsowdialogbox/bidsowdialogbox.component';
import { ConfirmationDialogComponent } from '../app/shared/_components/confirmation-dialog/confirmation-dialog.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { BidProfessionalDialogBoxComponent } from '../app/shared/_components/bidprofessionaldialogbox/bidprofessionaldialogbox.component';
import { HowToComponent } from './components/pages/howto/howto.component';
import {  UserAgreementComponent } from './components/pages/useragreement/useragreement.component';
import { BidListboxComponent } from '../app/shared/_components/bid-listbox/bid-listbox.component';
import { BidProfileComponent } from '../app/shared/_components/bid-profile/bid-profile.component';
import { ESignatureComponent } from '../app/shared/_components/e-signature/e-signature.component';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { AttachSignatureComponent } from '../app/shared/_components/attach-signature/attach-signature.component';
import { TutorialComponent } from './components/pages/tutorial/tutorial.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PostEditComponent } from '../app/shared/_components/post-edit/post-edit.component';
import { EditProfileComponent } from '../app/shared/_components/edit-profile/edit-profile.component';
import { BidDetailsComponent } from '../app/shared/_components/bid-details/bid-details.component';
import {ConsumerPaymentHistoryComponent} from '../app/shared/_components/consumer-payment-history/consumer-payment-history.component';
import { ConfirmationComponent } from '../app/shared/_components/confirmation/confirmation.component';
import { BarRatingModule } from "ngx-bar-rating";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CookieModule.forRoot(),
    CoreModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    OwlModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' }),
    SlickCarouselModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ConsumerModule,
    SignaturePadModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BarRatingModule,
    MatExpansionModule,
    MatButtonModule
  ],
  entryComponents: [
    ServiceDialogBoxComponent,
    VideoDialogboxComponent,
    CalendarDialogboxComponent,
    AddEventDialogboxComponent,
    BidListDialogBoxComponent,
    BidMessageDialogBoxComponent,
    BidAppointmentDialogBoxComponent,
    BidSowDialogBoxComponent,
    ConfirmationDialogComponent,
    BidProfessionalDialogBoxComponent,
    BidListboxComponent,
    BidProfileComponent,
    ESignatureComponent,
    AttachSignatureComponent,
    PostEditComponent,
    EditProfileComponent,
    BidDetailsComponent,
    ConsumerPaymentHistoryComponent,
    ConfirmationComponent
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    ServiceDialogBoxComponent,
    VideosComponent,
    TruncatePipe,
    AsFormArrayPipe,
    CalendarDialogboxComponent,
    AddEventDialogboxComponent,
    AboutUsComponent,
    TermsComponent,
    CharityComponent,
    ServiceProviderComponent,
    ContactComponent,
    BidListDialogBoxComponent,
    BidMessageDialogBoxComponent,
    BidAppointmentDialogBoxComponent,
    BidSowDialogBoxComponent,
    ConfirmationDialogComponent,
    FaqComponent,
    HowToComponent,
    UserAgreementComponent,
    BidProfessionalDialogBoxComponent,
    BidListboxComponent,
    BidProfileComponent,
    ESignatureComponent,
    AttachSignatureComponent,
    TutorialComponent,
    PostEditComponent,
    EditProfileComponent,
    ProviderActiveSowDialogComponent,
    BidDetailsComponent,
    ConsumerPaymentHistoryComponent,
    ConfirmationComponent
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
