import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MdSysAlertModule } from 'src/app/shared/md-sys/components/md-sys-alert/md-sys-alert.module';
import { HomePresentationModule } from './components/home-presentation/home-presentation.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdSysAlertModule,
    HomePresentationModule
  ]
})
export class HomeModule { }
