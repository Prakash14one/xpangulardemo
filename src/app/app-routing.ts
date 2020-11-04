import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { VideosComponent } from './components/videos/videos.component';
import { ErrorComponent } from './core/error/error.component';
import { NoAccessComponent } from './core/error/no-access.component';
import { PageNotFoundComponent } from './core/error/page-not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServiceProviderComponent } from './components/pages/service-provider/service-provider.component';
import { CharityComponent } from './components/pages/charity/charity.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';



import { ConsumerComponent } from './components/consumer/consumer.component';
import { ConsumerManageBidsComponent } from './components/consumer/_components/consumer-manage-bids/consumer-manage-bids.component';
import { ConsumerPostComponent } from './components/consumer/_components/consumer-post/consumer-post.component';
import { ConsumerManagePostsComponent } from './components/consumer/_components/consumer-manage-posts/consumer-manage-posts.component';
import { ConsumerEnrollmentsComponent } from './components/consumer/_components/consumer-enrollments/consumer-enrollments.component';
import { ConsumerPostCardComponent } from './components/consumer/_components/consumer-post-card/consumer-post-card.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ConsumerResolutionCenterComponent } from './components/consumer/_components/consumer-resolution-center/consumer-resolution-center.component';
import { HowToComponent } from './components/pages/howto/howto.component';
import { UserAgreementComponent } from './components/pages/useragreement/useragreement.component';
import { CompleteprojectsComponent } from './components/consumer/_components/completeprojects/completeprojects.component';
import { ConsumerManageAccountComponent } from './components/consumer/_components/consumer-manage-account/consumer-manage-account.component';
import { ManagePasswordComponent } from './components/consumer/_components/manage-password/manage-password.component';
import { PaymentComponent } from './components/consumer/_components/payment/payment.component';
import {ConsumerESignatureComponent } from './components/consumer/_components/consumer-e-signature/consumer-e-signature.component';
import { CalendarComponent } from './components/calendar-page/components/calendar/calendar.component';
import { TutorialComponent } from './components/pages/tutorial/tutorial.component';
import { ConsumerCreateNewPostComponent } from './components/consumer/_components/consumer-create-new-post/consumer-create-new-post.component';
import {ViewNotificationsComponent} from './components/consumer/_components/view-notifications/view-notifications.component';
import { MessagesComponent } from './components/consumer/_components/messages/messages/messages.component';
import {HistoryComponent} from './components/consumer/_components/history/history.component';
import {MyPostsCardComponent} from './components/consumer/_components/my-posts-card/my-posts-card.component';
import {ManageBidsCardComponent} from './components/consumer/_components/manage-bids-card/manage-bids-card.component';
import {CompletedProjectsCardComponent} from './components/consumer/_components/completed-projects-card/completed-projects-card.component';
import {ActiveProjectsCardComponent} from './components/consumer/_components/active-projects-card/active-projects-card.component';


export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'videos', pathMatch: 'full', component: VideosComponent },
  { path: 'xpb', pathMatch: 'full', component: LandingComponent },
  { path: 'error', component: ErrorComponent },
  { path: '401', pathMatch: 'full', component: NoAccessComponent }, // NO ACCESS
  { path: '404', pathMatch: 'full', component: PageNotFoundComponent }, // NOT FOUND
  {
    path: 'category',
    loadChildren: './components/category/category.module#CategoryModule'
  },
  {
    path: 'calendar',
    loadChildren: './components/calendar-page/calendar-page.module#CalendarPageModule'
  },
  { path: 'about-us', pathMatch: 'full', component: AboutUsComponent },
  { path: 'terms', pathMatch: 'full', component: TermsComponent },
  { path: 'charity', pathMatch: 'full', component: CharityComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
  { path: 'service-provider', pathMatch: 'full', component: ServiceProviderComponent },
  { path: 'lets-start', pathMatch: 'full', component: ConsumerEnrollmentsComponent },
  { path: 'faq', pathMatch: 'full', component: FaqComponent },
  { path: 'howto', pathMatch: 'full', component: HowToComponent },
  { path: 'useragreement', pathMatch: 'full', component: UserAgreementComponent },
  { path: 'tutorial', pathMatch: 'full', component: TutorialComponent},
  // consumer
  {
    path: 'consumer',
    component: ConsumerComponent,
    data: { preload: true },
    children: [
      { path: 'post', component: ConsumerPostComponent },
      { path: 'managebids', component: ConsumerManageBidsComponent },
      { path: 'manageposts', component: ConsumerManagePostsComponent },
      { path: 'completedprojects', component:CompleteprojectsComponent},
      { path: 'activeprojects', component:ActiveProjectsCardComponent},
      { path: 'cardposts', component: ConsumerPostCardComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'resolutioncenter', component: ConsumerResolutionCenterComponent },
      { path : 'manageaccount' , component : ConsumerManageAccountComponent},
      { path: 'managepassword' ,component: ManagePasswordComponent},
      { path:'payment',component:PaymentComponent},
      { path:'e_sig',component:ConsumerESignatureComponent},
      { path: 'new-post',component: ConsumerCreateNewPostComponent},
      { path: 'history',component: HistoryComponent },
      {path: 'view_notifications',component:ViewNotificationsComponent},
      {path:'messages',component:MessagesComponent},
      {path:'myposts_card',component:MyPostsCardComponent},
      {path:'managebids_card',component:ManageBidsCardComponent},
      {path:'completedprojects_card',component:CompletedProjectsCardComponent},
      {path:'activeprojects_card',component:ActiveProjectsCardComponent}

      
    ]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
