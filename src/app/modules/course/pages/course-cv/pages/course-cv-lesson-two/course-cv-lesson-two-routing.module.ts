import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvLessonTwoComponent } from './course-cv-lesson-two.component';

const routes: Routes = [{
  path: '',
  component: CourseCvLessonTwoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvLessonTwoRoutingModule { }
