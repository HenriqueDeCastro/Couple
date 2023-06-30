import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvLessonThreeRoutingModule } from './course-cv-lesson-three-routing.module';
import { CourseCvLessonThreeComponent } from './course-cv-lesson-three.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';


@NgModule({
  declarations: [
    CourseCvLessonThreeComponent
  ],
  imports: [
    CommonModule,
    CourseCvLessonThreeRoutingModule,
    TitlePageModule
  ]
})
export class CourseCvLessonThreeModule { }
