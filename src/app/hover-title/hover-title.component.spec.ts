import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverTitleComponent } from './hover-title.component';

describe('HoverTitleComponent', () => {
  let component: HoverTitleComponent;
  let fixture: ComponentFixture<HoverTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
