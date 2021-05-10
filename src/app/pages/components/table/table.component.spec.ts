import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { AppComponent } from 'src/app/app.component';
import { Entity } from 'src/app/libs/entity.interface';
import { LoginComponent } from '../../login/login.component';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent,
        AppComponent,
        LoginComponent, 
      ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCheckboxModule,
        MatSortModule,
        ResizableModule,
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show a sorted table', ()=> {
    const ENTITIES_DATA_TEST: Entity[] = [
      {code: 'C0031', 
      DGRN: true,
       CIF: 'A28013050', 
       name: 'CASER, CAJA DE SEGUROS Y REASEGUROS, S.A', 
       village: 'MADRID', 
       city:'MADRID', 
       postalCode: '28050', 
       country: 'ESPAÑA', 
       fax: 0},
      {code: 'C0074',
       DGRN: false, 
       CIF: 'G08169831', 
       name: 'CAIXA MANRESA', 
       village:'MANRESA', 
       city: 'BARCELONA', 
       postalCode: '0804', 
        country: 'ESPAÑA', 
        fax: 0},
    ];

    const arrow = fixture.debugElement.nativeElement.querySelectorAll('div.mat-sort-header-container');
    component.data = new MatTableDataSource<Entity> (ENTITIES_DATA_TEST);
    component.sort = new MatSort();
    component.data.sort = component.sort;
    fixture.detectChanges();

    arrow[1].click();
    fixture.detectChanges();

  });

  it('should test rows on the table' ,()=> {

      fixture.detectChanges();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);
  });

 

  
});