import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckImportsTableComponent } from './check-imports-table.component';

describe('CheckImportsTableComponent', () => {
  let component: CheckImportsTableComponent;
  let fixture: ComponentFixture<CheckImportsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckImportsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckImportsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
