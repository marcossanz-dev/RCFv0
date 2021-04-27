import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DATA_HEADER, ELEMENT_DATA } from './check-imports-table.enums';

@Component({
  selector: 'app-check-imports-table',
  templateUrl: './check-imports-table.component.html',
  styleUrls: ['./check-imports-table.component.scss'],
})
export class CheckImportsTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'toxic',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataHeader = DATA_HEADER;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  setAll(event: any) {
    console.log(event);
  }
}
