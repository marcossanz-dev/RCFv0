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
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
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

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('check resize function parameters', () => {
    const spyResize = jest.spyOn(component, 'onResizeEnd');
    const element = document.getElementsByTagName('th');
    let event = {} as ResizeEvent;
    element[0].dispatchEvent(new Event('resizeEnd'));
    expect(spyResize).toHaveBeenCalled();
    component.onResizeEnd(event, null);
    expect(spyResize).toReturn();
    event = {
      edges: {},
      rectangle: { top: 0, bottom: 50, left: 0, right: 100 },
    };
    component.onResizeEnd(event, null);
    expect(spyResize).toReturn();
    event = {
      edges: { top: 0, bottom: 50, left: 0, right: 100 },
      rectangle: { top: 0, bottom: 50, left: 0, right: 100 },
    };
    component.onResizeEnd(event, null);
    expect(spyResize).toReturn();
    event = {
      edges: { top: 0, bottom: 50, left: 0, right: 100 },
      rectangle: { top: 0, bottom: 50, left: 0, right: 100, width: 100 },
    };
    component.maxWidth = 50;
    component.onResizeEnd(event, null);
    expect(spyResize).toReturn();
  });

  test('check resize inner function', () => {
    const spySetElementWith = jest.spyOn(component, 'setElementWith');
    const event = {
      edges: { top: 0, bottom: 50, left: 0, right: 100 },
      rectangle: { top: 0, bottom: 50, left: 0, right: 100, width: 100 },
    } as ResizeEvent;
    component.maxWidth = 150;
    component.onResizeEnd(event, null);
    expect(spySetElementWith).toHaveBeenCalledWith(100, null);
  });
});
