import { Component, Input } from '@angular/core';

@Component({
  selector: 'couple-title-page',
  template: `
    <div class="title-container">
      <couple-back-button *ngIf="backButton"></couple-back-button>
      <h1 class="title-large">{{label}}</h1>
    </div>
  `,
  styles: [
    '.title-container { display: flex; gap: 0.1rem; align-items: center; text-align: center; }',
    'h1 { font-weight: bold; margin: 0 }',
  ]
})
export class TitlePageComponent {

  @Input() label!: string;
  @Input() backButton!: boolean;
}
