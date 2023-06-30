import { Component, Input } from '@angular/core';

@Component({
  selector: 'couple-timeline-card-article',
  templateUrl: './timeline-card-article.component.html',
  styleUrls: ['./timeline-card-article.component.scss']
})
export class TimelineCardArticleComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() number!: string;
  @Input() image!: string;
}
