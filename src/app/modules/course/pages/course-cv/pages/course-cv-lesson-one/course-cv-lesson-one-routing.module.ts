import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvLessonOneComponent } from './course-cv-lesson-one.component';

const routes: Routes = [{
  path: '',
  component: CourseCvLessonOneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvLessonOneRoutingModule { }
