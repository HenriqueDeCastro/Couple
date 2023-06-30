import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button.component';
import { MdSysIconButtonModule } from '../../md-sys/components/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';

@NgModule({
  declarations: [BackButtonComponent],
  imports: [CommonModule, MdSysIconButtonModule],
  exports: [BackButtonComponent]
})
export class BackButtonModule { }
