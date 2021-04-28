import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DATA_HEADER, ELEMENT_DATA } from './models/check-imports-table.enums';

@Component({
  selector: 'app-check-imports-table',
  templateUrl: './check-imports-table.component.html',
  styleUrls: ['./check-imports-table.component.scss'],
})
export class CheckImportsTableComponent implements AfterViewInit, OnInit {
  dataHeader = DATA_HEADER;
  displayedColumns: string[] = this.dataHeader.map((item) => {
    return item.element;
  });
  columns = this.dataHeader.map((item, index) => {
    return { field: item.element, width: 150, index: index };
  });
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  pressed = false;
  currentResizeIndex: number = 0;
  startX: number = 0;
  startWidth: number = 0;
  isResizingRight: boolean = true;
  resizableMousemove: () => void = this.renderer.listen(
    'document',
    'mousemove',
    (event) => {}
  );
  resizableMouseup: () => void = this.renderer.listen(
    'document',
    'mouseup',
    (event) => {}
  );
  minWidth = 150;
  maxWidth = 550;

  @ViewChild(MatTable, { read: ElementRef }) private matTableRef?: ElementRef;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.setDisplayedColumns();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.setTableResize(this.matTableRef?.nativeElement.clientWidth);
  }
  setAll(event: any) {}

  setTableResize(tableWidth: number) {
    this.columns.forEach((column) => {
      this.setColumnWidth(column);
    });
  }

  setDisplayedColumns() {
    this.columns.forEach((column, index) => {
      column.index = index;
      this.displayedColumns[index] = column.field;
    });
  }

  onResizeColumn(event: any, index: number) {
    this.checkResizing(event, index);
    this.currentResizeIndex = index;
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = event.target.clientWidth;
    event.preventDefault();
    this.mouseMove(index);
  }

  private checkResizing(event: any, index: number) {
    const cellData = this.getCellData(index);
    if (
      index === 0 ||
      (Math.abs(event.pageX - cellData.right) < cellData.width / 2 &&
        index !== this.columns.length - 1)
    ) {
      this.isResizingRight = true;
    } else {
      this.isResizingRight = false;
    }
  }

  private getCellData(index: number) {
    const headerRow = this.matTableRef?.nativeElement.children[0];
    const cell = headerRow.children[0].children[index];
    return cell.getBoundingClientRect();
  }

  mouseMove(index: number) {
    this.resizableMousemove = this.renderer.listen(
      'document',
      'mousemove',
      (event) => {
        if (this.pressed && event.buttons) {
          const dx = this.isResizingRight
            ? event.pageX - this.startX
            : -event.pageX + this.startX;
          const width = this.startWidth + dx;
          if (this.currentResizeIndex === index && width > 50) {
            this.setColumnWidthChanges(index, width);
          }
        }
      }
    );
    this.resizableMouseup = this.renderer.listen(
      'document',
      'mouseup',
      (event) => {
        if (this.pressed) {
          this.pressed = false;
          this.currentResizeIndex = -1;
          this.resizableMousemove();
          this.resizableMouseup();
        }
      }
    );
  }

  setColumnWidthChanges(index: number, width: number) {
    const orgWidth = this.columns[index].width;
    const dx = width - orgWidth;
    if (dx !== 0) {
      const j = this.isResizingRight ? index + 1 : index - 1;
      const newWidth = this.columns[j].width - dx;
      if (newWidth > 50) {
        this.columns[index].width = width;
        this.setColumnWidth(this.columns[index]);
        this.columns[j].width = newWidth;
        this.setColumnWidth(this.columns[j]);
      }
    }
  }

  setColumnWidth(column: any) {
    const columnEls = Array.from(
      document.getElementsByClassName('mat-column-' + column.field)
    );
    columnEls.forEach((el: any) => {
      if (
        el.children[0] &&
        column.width >= this.minWidth &&
        column.width <= this.maxWidth
      ) {
        el.style.width = column.width + 'px';
        el.children[0].style.width = column.width + 'px';
        el.style.maxWidth = column.width + 'px';
        el.children[0].style.maxWidth = column.width + 'px';
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setTableResize(this.matTableRef?.nativeElement.clientWidth);
  }
}
