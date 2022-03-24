import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezetoComponent } from './vezeto.component';

describe('VezetoComponent', () => {
  let component: VezetoComponent;
  let fixture: ComponentFixture<VezetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VezetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VezetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
