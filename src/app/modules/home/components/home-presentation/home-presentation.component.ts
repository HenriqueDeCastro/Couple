import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemingService } from 'src/app/core/services/theming/theming.service';
import { IRouteElement } from 'src/app/shared/classes/interfaces';
import { colorScheme } from 'src/app/shared/classes/types';

@Component({
  selector: 'couple-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent {

  currentTheme$: Observable<colorScheme>;
  cardsList: IRouteElement[];

  constructor(private themingService: ThemingService) {
    this.currentTheme$ = this.themingService.currentActive();
    this.cardsList = [
      {
        title: 'Nossa história',
        icon: '&#xea3e;',
        description: 'Um cantinho para guardar momentos especiais.'
      },
      {
        title: 'Feito com carinho',
        icon: '&#xea70;',
        description: 'Simples, mas feito com amor.'
      },
      {
        title: 'Estudos',
        icon: '&#xf10a;',
        description: 'Relembrar tudo que aprendemos como casal.'
      },
    ]
  }
}
