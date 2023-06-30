import { Component, Input } from '@angular/core';
import { DrawerService } from 'src/app/core/services/drawer/drawer.service';
import { AppRoutesEnum, AppRoutesIconEnum, AppRoutesTitleEnum } from 'src/app/shared/classes/enums';
import { IRouteElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'md-sys-drawer',
  templateUrl: './md-sys-drawer.component.html',
  styleUrls: ['./md-sys-drawer.component.scss']
})
export class MdSysDrawerComponent {

  @Input() show!: boolean;
  buttonList: IRouteElement[];

  constructor(private drawerService: DrawerService) {
    this.buttonList = Object.keys(AppRoutesEnum)
      .map((enumKey: string) => ({
        title: AppRoutesTitleEnum[enumKey as keyof typeof AppRoutesTitleEnum],
        icon: AppRoutesIconEnum[enumKey as keyof typeof AppRoutesIconEnum],
        route: AppRoutesEnum[enumKey as keyof typeof AppRoutesEnum]
      }));
  }

  changeStatusDrawer(): void {
    this.drawerService.change();
  }
}
