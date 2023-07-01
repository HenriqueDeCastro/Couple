import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvLessonFourRoutingModule } from './course-cv-lesson-four-routing.module';
import { CourseCvLessonFourComponent } from './course-cv-lesson-four.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';
import { MdSysDividerModule } from 'src/app/shared/md-sys/components/md-sys-divider/md-sys-divider.module';

@NgModule({
  declarations: [CourseCvLessonFourComponent],
  imports: [
    CommonModule,
    CourseCvLessonFourRoutingModule,
    TitlePageModule,
    MdSysDividerModule
  ]
})
export class CourseCvLessonFourModule { }
