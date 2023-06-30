import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCvComponent } from './course-cv.component';
import { CvLessonRoutesEnum } from './enums';
import { CourseRoutesTitleEnum } from '../../enums/course-routes/course-routes.enum';
import { AppRoutesTitleEnum } from 'src/app/shared/classes/enums';

const routes: Routes = [
  {
    path: '',
    component: CourseCvComponent,
    title: `${AppRoutesTitleEnum.COURSE} - ${CourseRoutesTitleEnum.CV}`,
    children: [
      {
        path: CvLessonRoutesEnum.HOME,
        loadChildren:() => import('./pages/course-cv-home/course-cv-home.module').then((m) => m.CourseCvHomeModule)
      },
      {
        path: CvLessonRoutesEnum.ONE,
        loadChildren:() => import('./pages/course-cv-lesson-one/course-cv-lesson-one.module').then((m) => m.CourseCvLessonOneModule)
      },
      {
        path: CvLessonRoutesEnum.TWO,
        loadChildren:() => import('./pages/course-cv-lesson-two/course-cv-lesson-two.module').then((m) => m.CourseCvLessonTwoModule)
      },
      {
        path: CvLessonRoutesEnum.THREE,
        loadChildren:() => import('./pages/course-cv-lesson-three/course-cv-lesson-three.module').then((m) => m.CourseCvLessonThreeModule)
      },
      {
        path: CvLessonRoutesEnum.FOUR,
        loadChildren:() => import('./pages/course-cv-lesson-four/course-cv-lesson-four.module').then((m) => m.CourseCvLessonFourModule)
      },
      {
        path: CvLessonRoutesEnum.FIVE,
        loadChildren:() => import('./pages/course-cv-lesson-five/course-cv-lesson-five.module').then((m) => m.CourseCvLessonFiveModule)
      },
      {
        path: CvLessonRoutesEnum.SIX,
        loadChildren:() => import('./pages/course-cv-lesson-six/course-cv-lesson-six.module').then((m) => m.CourseCvLessonSixModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: CvLessonRoutesEnum.HOME
      },
      {
        path: '**',
        redirectTo: 'nao-encontrado',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCvRoutingModule { }
