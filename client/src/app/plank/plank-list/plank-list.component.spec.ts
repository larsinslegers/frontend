import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlankListComponent } from './plank-list.component';

describe('PlankListComponent', () => {
  let component: PlankListComponent;
  let fixture: ComponentFixture<PlankListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlankListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
