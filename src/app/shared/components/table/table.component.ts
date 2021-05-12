import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnInit {
  @Input() dataHeader;
  @Input() elementData;
  displayedColumns: string[];
  @Input() isMultiple = false;
  dataSource;
  selection;

  @Input() minWidth = 100;
  @Input() maxWidth = 550;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit() {
    this.displayedColumns = this.dataHeader.map((item) => {
      return item.element;
    });
    this.dataSource = new MatTableDataSource(this.elementData);
    this.selection = new SelectionModel<any>(this.isMultiple, []);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  //
  onResizeEnd(event: ResizeEvent, columnName: any): void {
    if (event.edges?.right) {
      if (
        event.rectangle.width &&
        event.rectangle.width <= this.maxWidth &&
        event.rectangle.width >= this.minWidth
      ) {
        this.setElementWith(event.rectangle.width, columnName);
      } else {
        return;
      }
    } else {
      return;
    }
  }
  setElementWith(width: number, columnName: any) {
    const cssValue = width + 'px';
    const columnElts = document.getElementsByClassName(
      'mat-column-' + columnName
    );
    for (let i = 0; i < columnElts.length; i++) {
      const currentEl = columnElts[i] as any;
      currentEl.style.maxWidth = cssValue;
      currentEl.children[0].style.maxWidth = cssValue;
      currentEl.style.width = cssValue;
      currentEl.children[0].style.width = cssValue;
    }
  }

  selectTableRow(row: any) {
    this.selection.toggle(row);
  }
}
