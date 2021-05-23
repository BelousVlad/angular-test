import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCellComponent } from './address-cell.component';

describe('AddressCellComponent', () => {
  let component: AddressCellComponent;
  let fixture: ComponentFixture<AddressCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
