import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from './title-page.component';
import { BackButtonModule } from '../back-button/back-button.module';

@NgModule({
  declarations: [TitlePageComponent],
  imports: [CommonModule, BackButtonModule],
  exports: [TitlePageComponent]
})
export class TitlePageModule { }
