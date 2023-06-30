import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvHomeComponent } from './course-cv-home.component';

const routes: Routes = [{
  path: '',
  component: CourseCvHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvHomeRoutingModule { }
