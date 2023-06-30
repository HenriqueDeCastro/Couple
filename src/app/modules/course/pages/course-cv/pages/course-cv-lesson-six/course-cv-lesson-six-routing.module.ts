import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvLessonSixComponent } from './course-cv-lesson-six.component';

const routes: Routes = [{
  path: '',
  component: CourseCvLessonSixComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvLessonSixRoutingModule { }
