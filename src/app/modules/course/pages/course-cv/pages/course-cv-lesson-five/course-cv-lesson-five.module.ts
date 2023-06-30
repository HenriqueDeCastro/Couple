import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvLessonFiveRoutingModule } from './course-cv-lesson-five-routing.module';
import { CourseCvLessonFiveComponent } from './course-cv-lesson-five.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';

@NgModule({
  declarations: [CourseCvLessonFiveComponent],
  imports: [
    CommonModule,
    CourseCvLessonFiveRoutingModule,
    TitlePageModule
  ]
})
export class CourseCvLessonFiveModule { }
