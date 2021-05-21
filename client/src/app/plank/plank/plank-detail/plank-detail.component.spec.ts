import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlankDetailComponent } from './plank-detail.component';

describe('PlankDetailComponent', () => {
  let component: PlankDetailComponent;
  let fixture: ComponentFixture<PlankDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlankDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlankDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
