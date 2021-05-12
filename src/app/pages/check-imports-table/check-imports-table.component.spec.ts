import { SharedModule } from './../../shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckImportsTableComponent } from './check-imports-table.component';

import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe.skip('CheckImportsTableComponent', () => {
  let component: CheckImportsTableComponent;
  let fixture: ComponentFixture<CheckImportsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserModule,
        CdkTableModule,
        MatTableModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatMenuModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [CheckImportsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckImportsTableComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    fixture.detectChanges();
  });
});
