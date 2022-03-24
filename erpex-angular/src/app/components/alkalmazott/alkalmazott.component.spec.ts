import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkalmazottComponent } from './alkalmazott.component';

describe('AlkalmazottComponent', () => {
  let component: AlkalmazottComponent;
  let fixture: ComponentFixture<AlkalmazottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlkalmazottComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkalmazottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
