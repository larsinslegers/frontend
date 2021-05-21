import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlankComponent } from './add-plank.component';

describe('AddPlankComponent', () => {
  let component: AddPlankComponent;
  let fixture: ComponentFixture<AddPlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
