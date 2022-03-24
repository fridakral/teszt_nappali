import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelenletiivComponent } from './jelenletiiv.component';

describe('JelenletiivComponent', () => {
  let component: JelenletiivComponent;
  let fixture: ComponentFixture<JelenletiivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JelenletiivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JelenletiivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
