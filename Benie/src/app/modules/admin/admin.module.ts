import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { ResetConfirmedComponent } from './auth/components/reset-confirmed/reset-confirmed.component';
import { ChangePassFormComponent } from './auth/forms/change-pass-form/change-pass-form.component';
import { LoginFormComponent } from './auth/forms/login-form/login-form.component';
import { ResetConfirmedFormComponent } from './auth/forms/reset-confirmed-form/reset-confirmed-form.component';
import { AddChapterComponent, DialogForm } from './components/chapters/add-chapter/add-chapter.component';
import { AllChaptersComponent } from './components/chapters/all-chapters/all-chapters.component';
import { EditChapterComponent } from './components/chapters/edit-chapter/edit-chapter.component';
import { AllContactsComponent } from './components/contacts/all-contacts/all-contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';
import { EditFeedbackComponent } from './components/feedbacks/edit-feedback/edit-feedback.component';
import { AddFeedbackComponent } from './components/feedbacks/add-feedback/add-feedback.component';
import { AllFeedbacksComponent } from './components/feedbacks/all-feedbacks/all-feedbacks.component';
import { AllNotificationsComponent } from './components/notifications/all-notifications/all-notifications.component';
import { AddNotificationComponent } from './components/notifications/add-notification/add-notification.component';
import { EditNotificationComponent } from './components/notifications/edit-notification/edit-notification.component';
import { EditPageComponent } from './components/pages/edit-page/edit-page.component';
import { AddPageComponent, PageDialogForm } from './components/pages/add-page/add-page.component';
import { AllPagesComponent } from './components/pages/all-pages/all-pages.component';
import { AllPoemsComponent } from './components/poems/all-poems/all-poems.component';
import { AddPoemComponent } from './components/poems/add-poem/add-poem.component';
import { EditPoemComponent } from './components/poems/edit-poem/edit-poem.component';
import { EditReactionComponent } from './components/reactions/edit-reaction/edit-reaction.component';
import { AddReactionComponent } from './components/reactions/add-reaction/add-reaction.component';
import { AllReactionsComponent } from './components/reactions/all-reactions/all-reactions.component';
import { AllStoriesComponent } from './components/stories/all-stories/all-stories.component';
import { AddStoryComponent } from './components/stories/add-story/add-story.component';
import { EditStoryComponent } from './components/stories/edit-story/edit-story.component';
import { EditSubscriberComponent } from './components/subscribers/edit-subscriber/edit-subscriber.component';
import { AddSubscriberComponent } from './components/subscribers/add-subscriber/add-subscriber.component';
import { AllSubscribersComponent } from './components/subscribers/all-subscribers/all-subscribers.component';
import { AllTagsComponent } from './components/tags/all-tags/all-tags.component';
import { AddTagComponent } from './components/tags/add-tag/add-tag.component';
import { EditTagComponent } from './components/tags/edit-tag/edit-tag.component';
import { ErrorsComponent } from './errors/errors.component';
import { ResetRequestFormComponent } from './auth/forms/reset-request-form/reset-request-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxEditorModule } from 'ngx-editor';
import {MatExpansionModule} from '@angular/material/expansion'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NavigationModule } from '../navigation/navigation.module';
import { RegisterComponent } from './auth/components/register/register.component';
import { RegFormComponent } from './auth/forms/reg-form/reg-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    ChangePasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
    ResetConfirmedComponent,
    ChangePassFormComponent,
    LoginFormComponent,
    ResetConfirmedFormComponent,
    AddChapterComponent,
    AllChaptersComponent,
    EditChapterComponent,
    AllContactsComponent,
    AddContactComponent,
    EditContactComponent,
    EditFeedbackComponent,
    AddFeedbackComponent,
    AllFeedbacksComponent,
    AllNotificationsComponent,
    AddNotificationComponent,
    EditNotificationComponent,
    EditPageComponent,
    AddPageComponent,
    AllPagesComponent,
    AllPoemsComponent,
    AddPoemComponent,
    EditPoemComponent,
    EditReactionComponent,
    AddReactionComponent,
    AllReactionsComponent,
    AllStoriesComponent,
    AddStoryComponent,
    EditStoryComponent,
    EditSubscriberComponent,
    AddSubscriberComponent,
    AllSubscribersComponent,
    AllTagsComponent,
    AddTagComponent,
    EditTagComponent,
    ErrorsComponent,
    DialogForm,
    PageDialogForm,
    ResetRequestFormComponent,
    RegisterComponent,
    RegFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    NgxEditorModule,
    ReactiveFormsModule,
    AngularEditorModule,
    MatExpansionModule,
    NavigationModule,
  ]
})
export class AdminModule { }
