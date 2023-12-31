import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHomeComponent } from './course-home.component';

const routes: Routes = [
  {
    path: '',
    component: CourseHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseHomeRoutingModule { }
