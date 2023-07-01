import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHomeComponent } from './course-home.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';
import { MdSysCardModule } from 'src/app/shared/md-sys/components/md-sys-card/md-sys-card.module';

describe('CourseHomeComponent', () => {
  let component: CourseHomeComponent;
  let fixture: ComponentFixture<CourseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseHomeComponent],
      imports: [TitlePageModule, MdSysCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
