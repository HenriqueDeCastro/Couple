import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonFourComponent } from './course-cv-lesson-four.component';

describe('CourseCvLessonFourComponent', () => {
  let component: CourseCvLessonFourComponent;
  let fixture: ComponentFixture<CourseCvLessonFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvLessonFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvLessonFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
