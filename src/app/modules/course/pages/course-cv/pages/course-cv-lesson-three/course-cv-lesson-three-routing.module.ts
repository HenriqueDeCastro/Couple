import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvLessonThreeComponent } from './course-cv-lesson-three.component';

const routes: Routes = [{
  path: '',
  component: CourseCvLessonThreeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvLessonThreeRoutingModule { }
