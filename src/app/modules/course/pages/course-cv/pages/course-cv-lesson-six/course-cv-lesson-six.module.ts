import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvLessonSixRoutingModule } from './course-cv-lesson-six-routing.module';
import { CourseCvLessonSixComponent } from './course-cv-lesson-six.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';


@NgModule({
  declarations: [CourseCvLessonSixComponent],
  imports: [
    CommonModule,
    CourseCvLessonSixRoutingModule,
    TitlePageModule
  ]
})
export class CourseCvLessonSixModule { }
