import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { DashboardModule} from 'libraries/menu-library/src/lib/dashboard/dashboard.component'

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    DashboardModule
  ]
})
export class HomePageModule { }
