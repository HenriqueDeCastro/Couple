import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonComponent } from './back-button.component';
import { MdSysIconButtonModule } from '../../md-sys/components/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';
import { Location } from '@angular/common';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  let location: Location;
  const locationStub = { back: jest.fn(), }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackButtonComponent],
      imports: [MdSysIconButtonModule],
      providers: [{provide: Location, useValue: locationStub},]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    location = fixture.debugElement.injector.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back', () => {
    component.backRoute();
    expect(location.back).toHaveBeenCalled();
 });
});
