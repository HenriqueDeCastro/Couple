import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonFiveComponent } from './course-cv-lesson-five.component';

describe('CourseCvLessonFiveComponent', () => {
  let component: CourseCvLessonFiveComponent;
  let fixture: ComponentFixture<CourseCvLessonFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvLessonFiveComponent ]
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
