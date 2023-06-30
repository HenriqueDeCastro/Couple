import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseHomeRoutingModule } from './course-home-routing.module';
import { CourseHomeComponent } from './course-home.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';
import { MdSysCardModule } from 'src/app/shared/md-sys/components/md-sys-card/md-sys-card.module';

@NgModule({
  declarations: [CourseHomeComponent],
  imports: [
    CommonModule,
    CourseHomeRoutingModule,
    TitlePageModule,
    MdSysCardModule
  ]
})
export class CourseHomeModule { }
