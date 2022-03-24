import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjalkalmazottComponent } from './ujalkalmazott.component';

describe('UjalkalmazottComponent', () => {
  let component: UjalkalmazottComponent;
  let fixture: ComponentFixture<UjalkalmazottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjalkalmazottComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UjalkalmazottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
