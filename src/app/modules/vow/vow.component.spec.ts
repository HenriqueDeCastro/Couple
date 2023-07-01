import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowComponent } from './vow.component';

describe('VowComponent', () => {
  let component: VowComponent;
  let fixture: ComponentFixture<VowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
