import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { TimelineComponent } from './timeline.component';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    title: AppRoutesTitleEnum.TIMELINE
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
