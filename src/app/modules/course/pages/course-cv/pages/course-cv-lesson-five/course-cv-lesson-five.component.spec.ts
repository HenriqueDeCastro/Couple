import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonFiveComponent } from './course-cv-lesson-five.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';

describe('CourseCvLessonFiveComponent', () => {
  let component: CourseCvLessonFiveComponent;
  let fixture: ComponentFixture<CourseCvLessonFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCvLessonFiveComponent],
      imports: [TitlePageModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvLessonFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
