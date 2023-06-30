import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonSixComponent } from './course-cv-lesson-six.component';

describe('CourseCvLessonSixComponent', () => {
  let component: CourseCvLessonSixComponent;
  let fixture: ComponentFixture<CourseCvLessonSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvLessonSixComponent ]
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
