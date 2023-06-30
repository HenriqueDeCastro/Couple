import { Component } from '@angular/core';
import { CvLessonRoutesDescriptionEnum, CvLessonRoutesEnum, CvLessonRoutesTitleEnum } from '../../enums';
import { AppRoutesEnum } from 'src/app/shared/classes/enums';
import { IRouteElement } from 'src/app/shared/classes/interfaces';
import { CourseRoutesEnum, CourseRoutesTitleEnum } from 'src/app/modules/course/enums/course-routes/course-routes.enum';

@Component({
  selector: 'couple-course-cv-home',
  templateUrl: './course-cv-home.component.html',
  styleUrls: ['./course-cv-home.component.scss']
})
export class CourseCvHomeComponent {

  title: string;
  cardsList: IRouteElement[];

  constructor() {
    this.cardsList = Object.keys(CvLessonRoutesEnum)
      .filter((enumKey: string) => CvLessonRoutesEnum[enumKey as keyof typeof CvLessonRoutesEnum] !== CvLessonRoutesEnum.HOME)
      .map((enumKey: string) => ({
        title: CvLessonRoutesTitleEnum[enumKey as keyof typeof CvLessonRoutesTitleEnum],
        route: `/${AppRoutesEnum.COURSE}/${CourseRoutesEnum.CV}/${CvLessonRoutesEnum[enumKey as keyof typeof CvLessonRoutesEnum]}`,
        description: CvLessonRoutesDescriptionEnum[enumKey as keyof typeof CvLessonRoutesDescriptionEnum]
      }));

    this.title = CourseRoutesTitleEnum.CV;
  }

}
