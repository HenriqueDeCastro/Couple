import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'couple-back-button',
  template: '<md-sys-icon-button icon="&#xe5c4;" (click)="backRoute()"></md-sys-icon-button>'
})
export class BackButtonComponent {

  constructor(private location: Location) { }

  backRoute() {
    this.location.back();
  }
}
