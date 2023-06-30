import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvLessonFiveComponent } from './course-cv-lesson-five.component';

const routes: Routes = [{
  path: '',
  component: CourseCvLessonFiveComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvLessonFiveRoutingModule { }
