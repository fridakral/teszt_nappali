import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzemelyesAdatokComponent } from './szemelyes-adatok.component';

describe('SzemelyesAdatokComponent', () => {
  let component: SzemelyesAdatokComponent;
  let fixture: ComponentFixture<SzemelyesAdatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzemelyesAdatokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzemelyesAdatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
