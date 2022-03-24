import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeresElkuldveComponent } from './keres-elkuldve.component';

describe('KeresElkuldveComponent', () => {
  let component: KeresElkuldveComponent;
  let fixture: ComponentFixture<KeresElkuldveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeresElkuldveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeresElkuldveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
