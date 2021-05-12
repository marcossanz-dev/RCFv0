import { Component, OnInit } from '@angular/core';

interface TableColumn {
  id: number;
  field: string;
  value: string;
}

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  displayedColumns: string[] = [];
  columns: TableColumn[] = [
    {
      id: 0,
      field: 'atomicNumber',
      value: 'Número atómico'
    },
    {
      id: 1,
      field: 'name',
      value: 'Nombre'
    },
    {
      id: 2,
      field: 'symbol',
      value: 'Símbolo'
    },
    {
      id: 3,
      field: 'weight',
      value: 'Peso atómico'
    }
  ];

  tableData = [
    {
      atomicNumber: 1,
      name: 'Hidrógeno',
      symbol: 'H',
      weight: 1.00794
    },
    {
      atomicNumber: 2,
      name: 'Helio',
      symbol: 'He',
      weight: 4.002602
    },
    {
      atomicNumber: 3,
      name: 'Litio',
      symbol: 'Li',
      weight: 6.941
    },
    {
      atomicNumber: 4,
      name: 'Berilio',
      symbol: 'Be',
      weight: 9.012183
    },
    {
      atomicNumber: 5,
      name: 'Boro',
      symbol: 'B',
      weight: 10.811
    },
    {
      atomicNumber: 6,
      name: 'Carbono',
      symbol: 'C',
      weight: 12.0107
    },
    {
      atomicNumber: 7,
      name: 'Nitrógeno',
      symbol: 'N',
      weight: 14.0067
    },
    {
      atomicNumber: 8,
      name: 'Oxígeno',
      symbol: 'O',
      weight: 15.9994
    },
    {
      atomicNumber: 9,
      name: 'Flúor',
      symbol: 'F',
      weight: 18.9984032
    }
  ];

  private _setDisplayedColumns(): void {
    this.displayedColumns = this.columns.map((column) => column.field);
  }

  ngOnInit() {
    this._setDisplayedColumns();
  }

}
