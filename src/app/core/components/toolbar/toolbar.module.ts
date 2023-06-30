import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { DrawerButtonModule } from 'src/app/shared/components/drawer-button/drawer-button.module';
import { RouterModule } from '@angular/router';
import { MdSysIconButtonModule } from 'src/app/shared/md-sys/components/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MdSysIconButtonModule,
    DrawerButtonModule,
    RouterModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
