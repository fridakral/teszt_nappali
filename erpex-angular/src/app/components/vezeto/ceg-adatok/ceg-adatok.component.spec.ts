import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CegAdatokComponent } from './ceg-adatok.component';

describe('CegAdatokComponent', () => {
  let component: CegAdatokComponent;
  let fixture: ComponentFixture<CegAdatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CegAdatokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CegAdatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
