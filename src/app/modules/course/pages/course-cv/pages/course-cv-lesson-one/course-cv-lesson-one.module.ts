import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvLessonOneRoutingModule } from './course-cv-lesson-one-routing.module';
import { CourseCvLessonOneComponent } from './course-cv-lesson-one.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';

@NgModule({
  declarations: [CourseCvLessonOneComponent],
  imports: [
    CommonModule,
    CourseCvLessonOneRoutingModule,
    TitlePageModule
  ]
})
export class CourseCvLessonOneModule { }
