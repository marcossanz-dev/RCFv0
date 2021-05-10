import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { Entity } from 'src/app/libs/entity.interface';
import { Header } from 'src/app/libs/header.interface';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() entities: any;
  @Input() dataHeader: Header[];
  @Input() displayedColumns: string[];


  columns: any;
  public selection = new SelectionModel<Entity>(false, []);
  sortedData: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort = new MatSort;



  /*
  data = new MatTableDataSource(ENTITIES_DATA);
  dataHeader: Header[] = HEADER_DATA;
  displayedColumns: string[];
  @ViewChild(MatSort) sort: MatSort = new MatSort;
 */

  constructor() {
  }

  ngOnInit(): void {
    this.sortedData = new MatTableDataSource(this.entities);
    this.sortedData.sort = this.sort;
    this.columns = this.dataHeader.map((item) => {
      return { tag: item.tag, title: item.title }
    });
  }


  onResizeEnd(event: ResizeEvent, columnName: any): void {
    if (event.edges.right) {
      const cssValue = event.rectangle.width + 'px';
      const columnElts = document.getElementsByClassName('mat-column-' + columnName);
      for (let i = 0; i < columnElts.length; i++) {
        const currentEl = columnElts[i] as any;
        currentEl.style.width = cssValue;
      }
    }
  }

  sortData(sort: Sort) {
    const data = this.entities.data.slice();
    if (!sort.active || sort.direction === '') {
      this.entities.data = data;
      return;
    }

    this.entities.data = data.sort((a, b) => {
      console.log(a[sort.active]);
      console.log(b[sort.active]);
      const aux = a[sort.active];
      const isAsc = sort.direction === 'asc';
      return this.compare(a[sort.active],b[sort.active],isAsc)
      
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }



}


