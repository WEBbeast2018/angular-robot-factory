import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkshopsComponent } from './robot-workshop/workshops.component';
import { FormsModule } from '@angular/forms';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopsComponent,
    WorkshopDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
