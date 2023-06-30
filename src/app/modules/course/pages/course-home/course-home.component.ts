import { Component } from '@angular/core';
import { IRouteElement } from 'src/app/shared/classes/interfaces';
import { AppRoutesEnum, AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { CourseRoutesDescriptionEnum, CourseRoutesEnum, CourseRoutesIconEnum, CourseRoutesTitleEnum } from '../../enums/course-routes/course-routes.enum';

@Component({
  selector: 'couple-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.scss']
})
export class CourseHomeComponent {
  cardsList: IRouteElement[];
  title: string;

  constructor() {
    this.cardsList = Object.keys(CourseRoutesEnum)
      .filter((enumKey: string) => CourseRoutesEnum[enumKey as keyof typeof CourseRoutesEnum] !== CourseRoutesEnum.HOME)
      .map((enumKey: string) => ({
        title: CourseRoutesTitleEnum[enumKey as keyof typeof CourseRoutesTitleEnum],
        icon: CourseRoutesIconEnum[enumKey as keyof typeof CourseRoutesIconEnum],
        route: `/${AppRoutesEnum.COURSE}/${CourseRoutesEnum[enumKey as keyof typeof CourseRoutesEnum]}`,
        description: CourseRoutesDescriptionEnum[enumKey as keyof typeof CourseRoutesDescriptionEnum]
      }));

      this.title = AppRoutesTitleEnum.COURSE;
  }
}
