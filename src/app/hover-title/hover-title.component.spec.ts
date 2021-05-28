import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../domain-model/user';

import { HoverTitleComponent } from './hover-title.component';

describe('HoverTitleComponent', () => {
  let component: HoverTitleComponent<User>;
  let fixture: ComponentFixture<HoverTitleComponent<User>>;

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
