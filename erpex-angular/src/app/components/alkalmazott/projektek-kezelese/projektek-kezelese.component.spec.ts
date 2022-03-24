import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektekKezeleseComponent } from './projektek-kezelese.component';

describe('ProjektekKezeleseComponent', () => {
  let component: ProjektekKezeleseComponent;
  let fixture: ComponentFixture<ProjektekKezeleseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektekKezeleseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektekKezeleseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
