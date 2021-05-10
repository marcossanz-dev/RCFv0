import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entity } from 'src/app/libs/entity.interface';
import { Header } from 'src/app/libs/header.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Entity[] = [
    { code: 'C0031', DGRN: true, CIF: 'A28013050', name: 'CASER, CAJA DE SEGUROS Y REASEGUROS, S.A', village: 'MADRID', city: 'MADRID', postalCode: '28050', country: 'ESPAÑA', fax: 0 },
    { code: 'C0074', DGRN: false, CIF: 'G08169831', name: 'CAIXA MANRESA', village: 'MANRESA', city: 'BARCELONA', postalCode: '0804', country: 'ESPAÑA', fax: 0 },
    { code: 'C0739', DGRN: false, CIF: 'A82070442', name: 'CAJA ESPAÑA VIDA', village: 'LEON', city: 'LEON', postalCode: '24005', country: 'ESPAÑA', fax: 0 }
  ];

  dataHeader: Header[] = [
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

  notificationType = [
    'Si',
    'No',
    'Todos'
  ];

  displayedColumns: any;
  searchKey: string;
  dataSource: any;
  selectedOption: string = 'Todos';
  notification: boolean;


  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.dataHeader.map((item) => {
      return item.tag;
    });
    this.dataSource = new MatTableDataSource(this.data);

  }

  cleanFilter() {
    this.searchKey = '';
    this.selectedOption = 'Todos';
    this.dataSource = new MatTableDataSource(this.data);
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedOption != 'Todos') {
      this.applyNotificationFilter();

    }
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  applyNotificationFilter() {
    if (this.selectedOption === 'Si') {
      this.notification = true;
    } else { this.notification = false; }

    this.dataSource.data = this.dataSource.data.filter(data =>
      data.DGRN === this.notification
    );
  }

}