import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VowRoutingModule } from './vow-routing.module';
import { VowComponent } from './vow.component';
import { MdSysDividerModule } from 'src/app/shared/md-sys/components/md-sys-divider/md-sys-divider.module';

@NgModule({
  declarations: [VowComponent],
  imports: [CommonModule, VowRoutingModule]
})
export class VowModule { }
