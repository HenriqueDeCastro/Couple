import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePresentationComponent } from './home-presentation.component';
import { MdSysCardModule } from 'src/app/shared/md-sys/components/md-sys-card/md-sys-card.module';

@NgModule({
  declarations: [HomePresentationComponent],
  imports: [CommonModule, MdSysCardModule],
  exports: [HomePresentationComponent]
})
export class HomePresentationModule { }
