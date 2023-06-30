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
        title: 'D',
        icon: '&#xe898;',
        description: 'Não exigimos login ou cadastro.'
      },
      {
        title: '',
        icon: '&#xe425;',
        description: `Informações de CNPJ, ISBN, FIPE e muito mais.`
      },
      {
        title: 'Feito com carinho',
        icon: '&#xea70;',
        description: `Simples, mas feito com amor.`
      }
    ]
  }
}
