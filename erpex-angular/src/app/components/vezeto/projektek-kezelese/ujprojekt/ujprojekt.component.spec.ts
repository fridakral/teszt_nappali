import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjprojektComponent } from './ujprojekt.component';

describe('UjprojektComponent', () => {
  let component: UjprojektComponent;
  let fixture: ComponentFixture<UjprojektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjprojektComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UjprojektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
