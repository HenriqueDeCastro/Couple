import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvHomeComponent } from './course-cv-home.component';
import { TitlePageModule } from 'src/app/shared/components/title-page/title-page.module';
import { MdSysCardModule } from 'src/app/shared/md-sys/components/md-sys-card/md-sys-card.module';

describe('CourseCvHomeComponent', () => {
  let component: CourseCvHomeComponent;
  let fixture: ComponentFixture<CourseCvHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCvHomeComponent],
      imports: [TitlePageModule, MdSysCardModule]
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
