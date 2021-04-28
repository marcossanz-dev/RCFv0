import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableComponent } from './simple-table.component';

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

describe('SimpleTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;
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
      declarations: [SimpleTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
