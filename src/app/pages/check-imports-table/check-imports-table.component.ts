import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResizeEvent } from 'angular-resizable-element';
import { DATA_HEADER, ELEMENT_DATA } from './models/check-imports-table.enums';
import { CheckImportsElement } from './models/check-imports-table.interface';

@Component({
  selector: 'app-check-imports-table',
  templateUrl: './check-imports-table.component.html',
  styleUrls: ['./check-imports-table.component.scss'],
})
export class CheckImportsTableComponent implements AfterViewInit {
  dataHeader = DATA_HEADER;
  displayedColumns: string[] = this.dataHeader.map((item) => {
    return item.element;
  });
  columns = this.dataHeader.map((item, index) => {
    return { field: item.element, width: 150, index: index };
  });
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<typeof ELEMENT_DATA>(false, []);

  @Input() minWidth = 150;
  @Input() maxWidth = 550;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onResizeEnd(event: ResizeEvent, columnName: any): void {
    if (event.edges?.right) {
      if (event.rectangle.width && event.rectangle.width <= this.maxWidth) {
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
    if (row !== this.selection.selected[0]) {
      this.selection.toggle(row);
    } else {
      return;
    }
  }
}
