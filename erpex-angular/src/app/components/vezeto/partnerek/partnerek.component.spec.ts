import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerekComponent } from './partnerek.component';

describe('PartnerekComponent', () => {
  let component: PartnerekComponent;
  let fixture: ComponentFixture<PartnerekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
