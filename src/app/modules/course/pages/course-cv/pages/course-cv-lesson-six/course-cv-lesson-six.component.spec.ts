import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonSixComponent } from './course-cv-lesson-six.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';

describe('CourseCvLessonSixComponent', () => {
  let component: CourseCvLessonSixComponent;
  let fixture: ComponentFixture<CourseCvLessonSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCvLessonSixComponent],
      imports: [TitlePageModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvLessonSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
