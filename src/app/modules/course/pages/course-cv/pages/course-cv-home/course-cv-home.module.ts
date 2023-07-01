import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvHomeRoutingModule } from './course-cv-home-routing.module';
import { CourseCvHomeComponent } from './course-cv-home.component';
import { MdSysCardModule } from 'src/app/shared/md-sys/components/md-sys-card/md-sys-card.module';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';

@NgModule({
  declarations: [CourseCvHomeComponent],
  imports: [
    CommonModule,
    CourseCvHomeRoutingModule,
    TitlePageModule,
    MdSysCardModule
  ]
})
export class CourseCvHomeModule { }
