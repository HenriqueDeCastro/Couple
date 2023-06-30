import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvComponent } from './course-cv.component';

describe('CourseCvComponent', () => {
  let component: CourseCvComponent;
  let fixture: ComponentFixture<CourseCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
