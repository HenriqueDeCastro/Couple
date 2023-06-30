import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { CourseRoutesEnum } from './enums/course-routes/course-routes.enum';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    title: AppRoutesTitleEnum.COURSE,
    children: [
      {
        path: CourseRoutesEnum.CV,
        loadChildren:() => import('./pages/course-cv/course-cv.module').then((m) => m.CourseCvModule)
      },
      {
        path: CourseRoutesEnum.HOME,
        loadChildren:() => import('./pages/course-home/course-home.module').then((m) => m.CourseHomeModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: CourseRoutesEnum.HOME
      },
      {
        path: '**',
        redirectTo: 'nao-encontrado',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
