import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCvRoutingModule } from './course-cv-routing.module';
import { CourseCvComponent } from './course-cv.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CourseCvComponent],
  imports: [
    CommonModule,
    CourseCvRoutingModule,
    RouterModule
  ]
})
export class CourseCvModule { }
