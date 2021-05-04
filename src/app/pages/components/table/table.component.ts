import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Entity } from 'src/app/libs/entity.interface';
import { Header } from 'src/app/libs/header.interface';
import { ResizeEvent } from 'angular-resizable-element';

const ENTITIES_DATA: Entity[] = [
  { code: 'C0031', DGRN: true, CIF: 'A28013050', name: 'CASER, CAJA DE SEGUROS Y REASEGUROS, S.A', village: 'MADRID', city: 'MADRID', postalCode: '28050', country: 'ESPAÑA', fax: 0 },
  { code: 'C0074', DGRN: false, CIF: 'G08169831', name: 'CAIXA MANRESA', village: 'MANRESA', city: 'BARCELONA', postalCode: '0804', country: 'ESPAÑA', fax: 0 },
  { code: 'C0739', DGRN: false, CIF: 'A82070442', name: 'CAJA ESPAÑA VIDA', village: 'LEON', city: 'LEON', postalCode: '24005', country: 'ESPAÑA', fax: 0 }
];

const HEADER_DATA: Header[] = [
  { tag: 'code', title: 'CODIGO', isChecked: false },
  { tag: 'DGRN', title: 'NOTIFICACION DGRN', isChecked: false },
  { tag: 'CIF', title: 'CIF', isChecked: false },
  { tag: 'name', title: 'DENOMINACIÓN SOCIAL', isChecked: false },
  { tag: 'village', title: 'POBLACIÓN', isChecked: false },
  { tag: 'city', title: 'PROVINCIA', isChecked: false },
  { tag: 'postalCode', title: 'CODIGO POSTAL', isChecked: false },
  { tag: 'country', title: 'PAIS', isChecked: false },
  { tag: 'fax', title: 'FAX', isChecked: false },
  { tag: 'email', title: 'CORREO ELECTRONICO', isChecked: false }
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  //@Input() data:any[];
  //@Input() displayedColumns: string[];
  @Output() onSelected = new EventEmitter<any>();

  data = new MatTableDataSource(ENTITIES_DATA);
  dataHeader: Header[] = HEADER_DATA;
  displayedColumns: string[];
  columns: any;
  selection = new SelectionModel<Entity>(false, []);

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.columns = this.dataHeader.map((item) => {
      return { tag: item.tag, title: item.title }
    });
    this.displayedColumns = this.dataHeader.map((item) => {
      return item.tag;
    });
  }


  ngAfterViewInit() {
    this.data.sort = this.sort;
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

}