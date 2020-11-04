import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ConsumerComponent } from './consumer.component';
import { ConsumerManageBidsComponent } from './_components/consumer-manage-bids/consumer-manage-bids.component';
import { ConsumerNavHeaderComponent } from './_components/consumer-nav-header/consumer-nav-header.component';
import { ConsumerPostComponent } from './_components/consumer-post/consumer-post.component';
import { CompleteprojectsComponent } from './_components/completeprojects/completeprojects.component';


import { CalendarModule } from 'angular-calendar';
import { CoreModule } from './../../core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { ConsumerManagePostsComponent } from './_components/consumer-manage-posts/consumer-manage-posts.component';
import { ConsumerEnrollmentsComponent } from './_components/consumer-enrollments/consumer-enrollments.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ConsumerPostCardComponent } from './_components/consumer-post-card/consumer-post-card.component';
import { ConsumerResolutionCenterComponent } from './_components/consumer-resolution-center/consumer-resolution-center.component';
import { SortingPipe } from 'src/app/sorting.pipe';
import { ConsumerManageAccountComponent } from './_components/consumer-manage-account/consumer-manage-account.component';
import { ManagePasswordComponent } from './_components/manage-password/manage-password.component';
import { PaymentComponent } from './_components/payment/payment.component';
import { ConsumerESignatureComponent } from './_components/consumer-e-signature/consumer-e-signature.component';
import { CalendarComponent } from '../../components/calendar-page/components/calendar/calendar.component';
import { ConsumerCreateNewPostComponent } from './_components/consumer-create-new-post/consumer-create-new-post.component';
import { ViewNotificationsComponent } from './_components/view-notifications/view-notifications.component';
import { MessagesComponent } from './_components/messages/messages/messages.component';
import { HistoryComponent } from './_components/history/history.component';
import { MyPostsCardComponent } from './_components/my-posts-card/my-posts-card.component';
import { ManageBidsCardComponent } from './_components/manage-bids-card/manage-bids-card.component';
import { CompletedProjectsCardComponent } from './_components/completed-projects-card/completed-projects-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    // CalendarPageModule,
    CoreModule,
    SharedModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule
  ],

  declarations: [
    ConsumerComponent,
    ConsumerManageBidsComponent,
    ConsumerManagePostsComponent,
    ConsumerNavHeaderComponent,
    ConsumerPostComponent,
    ConsumerEnrollmentsComponent,
    ConsumerPostCardComponent,
    ConsumerResolutionCenterComponent,
    SortingPipe,
    CompleteprojectsComponent,
    ConsumerManageAccountComponent,
    ManagePasswordComponent,
    PaymentComponent,
    ConsumerESignatureComponent,
    CalendarComponent,
    ConsumerCreateNewPostComponent,
    ViewNotificationsComponent,
    MessagesComponent,
    HistoryComponent,
    MyPostsCardComponent,
    ManageBidsCardComponent,
    CompletedProjectsCardComponent
  ]
})
export class ConsumerModule { }
