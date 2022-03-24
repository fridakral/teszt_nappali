import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeladatokComponent } from './feladatok.component';

describe('FeladatokComponent', () => {
  let component: FeladatokComponent;
  let fixture: ComponentFixture<FeladatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeladatokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeladatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
