import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvHomeComponent } from './course-cv-home.component';

describe('CourseCvHomeComponent', () => {
  let component: CourseCvHomeComponent;
  let fixture: ComponentFixture<CourseCvHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
