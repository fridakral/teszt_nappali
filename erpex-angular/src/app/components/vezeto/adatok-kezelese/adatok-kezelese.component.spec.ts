import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatokKezeleseComponent } from './adatok-kezelese.component';

describe('AdatokKezeleseComponent', () => {
  let component: AdatokKezeleseComponent;
  let fixture: ComponentFixture<AdatokKezeleseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdatokKezeleseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdatokKezeleseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
