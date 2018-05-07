import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsComponent } from './robot-workshop/workshops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: WorkshopDetailComponent },
  { path: 'workshops', component: WorkshopsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
