import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutesEnum } from './shared/classes/enums';

const routes: Routes = [
  {
    path: AppRoutesEnum.HOME,
    loadChildren:() => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: AppRoutesEnum.TIMELINE,
    loadChildren:() => import('./modules/timeline/timeline.module').then((m) => m.TimelineModule),
  },
  {
    path: AppRoutesEnum.VOW,
    loadChildren:() => import('./modules/vow/vow.module').then((m) => m.VowModule),
  },
  {
    path: AppRoutesEnum.COURSE,
    loadChildren:() => import('./modules/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'nao-encontrado',
    loadChildren:() => import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutesEnum.HOME
  },
  {
    path: '**',
    redirectTo: 'nao-encontrado',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
