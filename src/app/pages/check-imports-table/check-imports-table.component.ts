import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResizeEvent } from 'angular-resizable-element';
import { DATA_HEADER, ELEMENT_DATA } from './models/check-imports-table.enums';

@Component({
  selector: 'app-check-imports-table',
  templateUrl: './check-imports-table.component.html',
  styleUrls: ['./check-imports-table.component.scss'],
})
export class CheckImportsTableComponent implements AfterViewInit {
  @Input() dataHeader = DATA_HEADER;
  displayedColumns: string[] = this.dataHeader.map((item) => {
    return item.element;
  });
  columns = this.dataHeader.map((item, index) => {
    return { field: item.element, width: 150, index: index };
  });
  @Input() isMultiple = false;
  @Input() dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<typeof ELEMENT_DATA>(this.isMultiple, []);

  @Input() minWidth = 100;
  @Input() maxWidth = 550;

  @ViewChild(MatSort)
  sort!: MatSort;
  //FILTER PART (NOT HERE ONLY FOR CODE)
  companyOptions = [{ name: 'Todos -' }];
  sendTypeOptions = [
    { name: 'Todos' },
    { name: 'Nueva producción' },
    { name: 'Cartera resto seguros' },
    { name: 'Nueva producción - tarjeta de crédito' },
    { name: 'Periódico' },
  ];

  checkboxObject = [
    {
      name: 'Compuesto',
      formControl: 'comp',
      options: [
        { label: 'Si', value: 0 },
        { label: 'No', value: 1 },
        { label: 'Todos', value: 2 },
      ],
    },
    {
      name: 'Generado',
      formControl: 'gen',
      options: [
        { label: 'Si', value: 0 },
        { label: 'No', value: 1 },
        { label: 'Todos', value: 2 },
      ],
    },
    {
      name: 'Enviado',
      formControl: 'send',
      options: [
        { label: 'Si', value: 0 },
        { label: 'No', value: 1 },
        { label: 'Todos', value: 2 },
      ],
    },
    {
      name: 'Validado',
      formControl: 'val',
      options: [
        { label: 'Si', value: 0 },
        { label: 'No', value: 1 },
        { label: 'Todos', value: 2 },
      ],
    },
    {
      name: 'Firmado',
      formControl: 'sing',
      options: [
        { label: 'Si', value: 0 },
        { label: 'No', value: 1 },
        { label: 'Todos', value: 2 },
      ],
    },
    {
      name: 'Procesado',
      formControl: 'proc',
      options: [
        { label: 'Si', value: 0 },
        { label: 'No', value: 1 },
        { label: 'Todos', value: 2 },
      ],
    },
    {
      name: 'Envio Manual',
      formControl: 'sendMan',
      options: [
        { label: 'Si', value: 0 },
        { label: 'No', value: 1 },
        { label: 'Todos', value: 2 },
      ],
    },
  ];

  form: FormGroup = this.fb.group({
    company: [''],
    sendType: [''],
    comp: [2],
    gen: [2],
    send: [2],
    val: [2],
    sing: [2],
    proc: [2],
    sendMan: [2],
    dateInitFrom: [null],
    dateInitTo: [null],
    dateEndFrom: [null],
    dateEndTo: [null],
  });
  constructor(private fb: FormBuilder) {}

  //

  ngAfterViewInit() {
    //FILTROOOO
    this.form.controls['company'].setValue(this.companyOptions[0].name, {
      onlySelf: true,
    });
    this.form.controls['sendType'].setValue(this.sendTypeOptions[0].name, {
      onlySelf: true,
    });
    this.checkboxObject.forEach((item) => {
      this.form.controls[item.formControl].markAllAsTouched();
      this.form.controls[item.formControl].setValue(2, {
        onlySelf: true,
      });
    });

    //
    this.dataSource.sort = this.sort;
  }

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
