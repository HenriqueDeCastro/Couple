import { DrawerService } from './core/services/drawer/drawer.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from './core/services/theming/theming.service';
import { ScrimService } from './core/services/scrim/scrim.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'couple-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDrawer$: Observable<boolean>;
  showScrim$: Observable<boolean>;

  constructor(
    private themingService: ThemingService,
    private scrimService: ScrimService,
    private drawerService: DrawerService,
    private router: Router) {
    this.themingService.load();
    this.showDrawer$ = this.drawerService.status();
    this.showScrim$ = this.scrimService.status();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.positionZero();
    });
  }

  positionZero(): void {
    if (typeof document === 'object' && document) {
      const scrollContent = document.querySelector('.scroll');
      if (scrollContent) {
        scrollContent.scrollTop = 0;
      }
    }
  }
}
