import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
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
  dataHeader = DATA_HEADER;
  elementData = ELEMENT_DATA;

  //TODO FILTER PART (NOT HERE ONLY FOR CODE)
  actionCheckBox = [
    {
      title: 'Fragmentado',
      value: '0',
    },
    {
      title: 'Rechazado',
      value: '1',
    },
    {
      title: 'Aceptado',
      value: '2',
    },
    {
      title: 'Sin procesar',
      value: '3',
    },
    {
      title: 'Todos',
      value: '4',
    },
  ];
  importCheckBox = [
    {
      title: 'Si',
      value: '0',
    },
    {
      title: 'No',
      value: '1',
    },
    {
      title: 'Todos',
      value: '2',
    },
  ];
  companyOptions = [{ name: 'Todos -' }];
  sendTypeOptions = [
    { name: 'Todos', value: 0 },
    { name: 'Nueva producción', value: 1 },
    { name: 'Cartera resto seguros', value: 2 },
    { name: 'Nueva producción - tarjeta de crédito', value: 3 },
    { name: 'Periódico', value: 4 },
  ];

  checkboxObject = [
    {
      name: 'Compuesto',
      formControl: 'comp',
      options: [
        { label: 'Si', value: '0' },
        { label: 'No', value: '1' },
        { label: 'Todos', value: '2' },
      ],
    },
    {
      name: 'Generado',
      formControl: 'gen',
      options: [
        { label: 'Si', value: '0' },
        { label: 'No', value: '1' },
        { label: 'Todos', value: '2' },
      ],
    },
    {
      name: 'Enviado',
      formControl: 'send',
      options: [
        { label: 'Si', value: '0' },
        { label: 'No', value: '1' },
        { label: 'Todos', value: '2' },
      ],
    },
    {
      name: 'Validado',
      formControl: 'val',
      options: [
        { label: 'Si', value: '0' },
        { label: 'No', value: '1' },
        { label: 'Todos', value: '2' },
      ],
    },
    {
      name: 'Firmado',
      formControl: 'sing',
      options: [
        { label: 'Si', value: '0' },
        { label: 'No', value: '1' },
        { label: 'Todos', value: '2' },
      ],
    },
    {
      name: 'Procesado',
      formControl: 'proc',
      options: [
        { label: 'Si', value: '0' },
        { label: 'No', value: '1' },
        { label: 'Todos', value: '2' },
      ],
    },
    {
      name: 'Envio Manual',
      formControl: 'sendMan',
      options: [
        { label: 'Si', value: '0' },
        { label: 'No', value: '1' },
        { label: 'Todos', value: '2' },
      ],
    },
  ];

  form: FormGroup;
  formImport: FormGroup;
  constructor(private fb: FormBuilder) {}

  //
  ngOnInit() {
    this.form = this.fb.group({
      company: [''],
      sendType: [''],
      comp: ['2', [Validators.required]],
      gen: ['2', [Validators.required]],
      send: ['2', [Validators.required]],
      val: ['2', [Validators.required]],
      sing: ['2', [Validators.required]],
      proc: ['2', [Validators.required]],
      sendMan: ['2', [Validators.required]],
      dateInitFrom: [null],
      dateInitTo: [null],
      dateEndFrom: [null],
      dateEndTo: [null],
    });
    //TODO Filtro importaciones
    this.formImport = this.fb.group({
      action: ['4'],
      import: ['2'],
      pendingFile: [false],
    });
  }

  ngAfterViewInit() {
    //TODO

    this.resetForm();
    this.resetFormImp();
    //
  }

  resetForm() {
    this.form.reset();
    this.form.controls['company'].setValue(this.companyOptions[0].name, {
      onlySelf: true,
    });
    this.form.controls['sendType'].setValue(this.sendTypeOptions[0].name, {
      onlySelf: true,
    });
    this.checkboxObject.forEach((item) => {
      this.form.controls[item.formControl].setValue('2');
    });
  }

  resetFormImp() {
    this.formImport.reset();
    this.formImport.controls['action'].setValue('4');
    this.formImport.controls['import'].setValue('2');
  }

  //TODO Filter
  manageButtons(event: string) {
    if (event === 'clean') {
      this.resetForm();
    } else if (event === 'search') {
      console.log(this.form);
    } else {
      return;
    }
  }

  manageButtonsImp(event: string) {
    if (event === 'clean') {
      this.resetFormImp();
    } else if (event === 'search') {
      console.log(this.formImport);
    } else {
      return;
    }
  }
  //
}
