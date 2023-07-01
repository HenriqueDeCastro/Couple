import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCardArticleComponent } from './timeline-card-article.component';

describe('TimelineCardArticleComponent', () => {
  let component: TimelineCardArticleComponent;
  let fixture: ComponentFixture<TimelineCardArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineCardArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineCardArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
