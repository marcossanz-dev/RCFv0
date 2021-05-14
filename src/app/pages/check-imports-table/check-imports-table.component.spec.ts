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
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';

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
    expect(spyResize).toBeFalsy;
    event = {
      edges: {},
      rectangle: { top: 0, bottom: 50, left: 0, right: 100 },
    };
    component.onResizeEnd(event, null);
    expect(spyResize).toBeFalsy;
    event = {
      edges: { top: 0, bottom: 50, left: 0, right: 100 },
      rectangle: { top: 0, bottom: 50, left: 0, right: 100 },
    };
    component.onResizeEnd(event, null);
    expect(spyResize).toBeFalsy;
    event = {
      edges: { top: 0, bottom: 50, left: 0, right: 100 },
      rectangle: { top: 0, bottom: 50, left: 0, right: 100, width: 100 },
    };
    component.maxWidth = 50;
    component.onResizeEnd(event, null);
    expect(spyResize).toBeFalsy;
  });

  test('check resize inner function', () => {
    const spySetElementWith = jest.spyOn(component, 'setElementWith');
    const event = {
      edges: { top: 0, bottom: 50, left: 0, right: 100 },
      rectangle: { top: 0, bottom: 50, left: 0, right: 100, width: 100 },
    } as ResizeEvent;
    component.maxWidth = 160;
    component.minWidth = 40;
    component.onResizeEnd(event, null);
    expect(spySetElementWith).toHaveBeenCalledWith(100, null);
  });

  test('check row select function', () => {
    const spySelect = jest.spyOn(component, 'selectTableRow');
    let row = [
      {
        code: '00000',
        perInit: '04/05/2021',
        perEnd: '05/05/2021',
        prevImp: '04/05/2021',
        impDate: '06/05/2021',
        imported: true,
        attemps: '45',
        extrDate: '12/05/2021',
        movements: '2',
        action: 'MOVE STEP MOVE STEP MOVE STEP MOVE STEP MOVE STEP MOVE STEP',
        accepted: '3',
        rejected: '2',
        signedUps: '4',
        modified: '3',
      },
    ];
    component.selection.selected[0] = row;
    component.selectTableRow(row);
    expect(spySelect).toBeFalsy;
    row = [
      {
        code: '00001',
        perInit: '04/05/2021',
        perEnd: '05/05/2021',
        prevImp: '04/05/2021',
        impDate: '06/05/2021',
        imported: false,
        attemps: '46',
        extrDate: '12/05/2021',
        movements: '2',
        action: 'MOVE STEP MOVE STEP MOVE STEP MOVE STEP MOVE STEP MOVE STEP',
        accepted: '3',
        rejected: '2',
        signedUps: '4',
        modified: '3',
      },
    ];
    component.selectTableRow(row);
    expect(component.selection.selected[0]).toBe(row);
  });
});
