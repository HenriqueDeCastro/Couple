import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonThreeComponent } from './course-cv-lesson-three.component';

describe('CourseCvLessonThreeComponent', () => {
  let component: CourseCvLessonThreeComponent;
  let fixture: ComponentFixture<CourseCvLessonThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvLessonThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvLessonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
