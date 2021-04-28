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
import { ResizableModule } from 'angular-resizable-element';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';

describe('CheckImportsTableComponent', () => {
  let component: CheckImportsTableComponent;
  let fixture: ComponentFixture<CheckImportsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CdkTableModule,
        MatCheckboxModule,
        MatSortModule,
        MatTableModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ResizableModule,
        MatMenuModule,
      ],
      declarations: [CheckImportsTableComponent],
    }).compileComponents();
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
