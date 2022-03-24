import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkalmazottEditComponent } from './alkalmazott-edit.component';

describe('AlkalmazottEditComponent', () => {
  let component: AlkalmazottEditComponent;
  let fixture: ComponentFixture<AlkalmazottEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlkalmazottEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkalmazottEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
