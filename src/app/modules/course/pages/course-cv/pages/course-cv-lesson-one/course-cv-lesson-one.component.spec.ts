import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonOneComponent } from './course-cv-lesson-one.component';

describe('CourseCvLessonOneComponent', () => {
  let component: CourseCvLessonOneComponent;
  let fixture: ComponentFixture<CourseCvLessonOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvLessonOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvLessonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
