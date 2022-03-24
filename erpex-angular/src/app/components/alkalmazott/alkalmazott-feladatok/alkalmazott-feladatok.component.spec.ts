import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkalmazottFeladatokComponent } from './alkalmazott-feladatok.component';

describe('AlkalmazottFeladatokComponent', () => {
  let component: AlkalmazottFeladatokComponent;
  let fixture: ComponentFixture<AlkalmazottFeladatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlkalmazottFeladatokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkalmazottFeladatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
