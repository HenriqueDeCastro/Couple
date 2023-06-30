import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { TimelineRoutingModule } from './timeline-routing.module';
import { MdSysCardModule } from 'src/app/shared/md-sys/components/md-sys-card/md-sys-card.module';
import { TimelineCardArticleModule } from './components/timeline-card-article/timeline-card-article.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule, TimelineRoutingModule, TimelineCardArticleModule, MdSysCardModule]
})
export class TimelineModule { }
