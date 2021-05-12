import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { AppComponent } from 'src/app/app.component';
import { Entity } from 'src/app/libs/entity.interface';
import { Header } from 'src/app/libs/header.interface';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { SharedModule } from '../../shared.module';
import { FilterComponent } from '../filter/filter.component';

import { TableComponent } from './table.component';

const ENTITIES_DATA_TEST: Entity[] = [
  {
    code: 'C0031',
    DGRN: true,
    CIF: 'A28013050',
    name: 'CASER, CAJA DE SEGUROS Y REASEGUROS, S.A',
    village: 'MADRID',
    city: 'MADRID',
    postalCode: '28050',
    country: 'ESPAÑA',
    fax: 0
  },
  {
    code: 'C0074',
    DGRN: false,
    CIF: 'G08169831',
    name: 'CAIXA MANRESA',
    village: 'MANRESA',
    city: 'BARCELONA',
    postalCode: '0804',
    country: 'ESPAÑA',
    fax: 0
  },
];

const DATA_HEADER: Header[] = [
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


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent,
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.dataTable = ENTITIES_DATA_TEST;
    component.dataHeader = DATA_HEADER;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show a sorted table', () => {
    const arrow = fixture.debugElement.nativeElement.querySelectorAll('div.mat-sort-header-container');
    component.dataTable = new MatTableDataSource<Entity>(ENTITIES_DATA_TEST);
    component.sort = new MatSort();
    component.dataTable.sort = component.sort;
    fixture.detectChanges();

    arrow[1].click();
    fixture.detectChanges();

  });
});
