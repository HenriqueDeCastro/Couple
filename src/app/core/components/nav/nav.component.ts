import { Component } from '@angular/core';
import { AppRoutesEnum, AppRoutesIconEnum, AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { IRouteElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'couple-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttonList: IRouteElement[];

  constructor() {
    this.buttonList = [
      {
        title: AppRoutesTitleEnum.HOME,
        icon: AppRoutesIconEnum.HOME,
        route: AppRoutesEnum.HOME
      },
      {
        title: AppRoutesTitleEnum.TIMELINE,
        icon: AppRoutesIconEnum.TIMELINE,
        route: AppRoutesEnum.TIMELINE
      },
      {
        title: AppRoutesTitleEnum.VOW,
        icon: AppRoutesIconEnum.VOW,
        route: AppRoutesEnum.VOW
      },
      {
        title: AppRoutesTitleEnum.COURSE,
        icon: AppRoutesIconEnum.COURSE,
        route: AppRoutesEnum.COURSE
      }
    ];
  }
}
