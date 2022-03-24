import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModositasKereseComponent } from './modositas-kerese.component';

describe('ModositasKereseComponent', () => {
  let component: ModositasKereseComponent;
  let fixture: ComponentFixture<ModositasKereseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModositasKereseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModositasKereseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
