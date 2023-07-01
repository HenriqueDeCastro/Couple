import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonFourComponent } from './course-cv-lesson-four.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';
import { MdSysDividerModule } from 'src/app/shared/md-sys/components/md-sys-divider/md-sys-divider.module';

describe('CourseCvLessonFourComponent', () => {
  let component: CourseCvLessonFourComponent;
  let fixture: ComponentFixture<CourseCvLessonFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCvLessonFourComponent],
      imports: [TitlePageModule, MdSysDividerModule]
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
