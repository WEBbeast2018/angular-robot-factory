import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';
import { WorkshopsService } from './workshops.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkshopsComponent } from './workshops/workshops.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopsComponent,
    WorkshopDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WorkshopsService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
