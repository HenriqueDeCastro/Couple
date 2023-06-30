import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvLessonTwoRoutingModule } from './course-cv-lesson-two-routing.module';
import { CourseCvLessonTwoComponent } from './course-cv-lesson-two.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';


@NgModule({
  declarations: [
    CourseCvLessonTwoComponent
  ],
  imports: [
    CommonModule,
    CourseCvLessonTwoRoutingModule,
    TitlePageModule
  ]
})
export class CourseCvLessonTwoModule { }
