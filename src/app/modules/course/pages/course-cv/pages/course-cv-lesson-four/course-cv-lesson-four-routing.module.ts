import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvLessonFourComponent } from './course-cv-lesson-four.component';

const routes: Routes = [{
  path: '',
  component: CourseCvLessonFourComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvLessonFourRoutingModule { }
