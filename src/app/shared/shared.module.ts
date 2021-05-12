import { FilterComponent } from './../components/filter/filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckImportsTableComponent } from '../pages/check-imports-table/check-imports-table.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SimpleTableComponent } from '../components/simple-table/simple-table.component';
import { CaTableComponent } from './components/table/ca-table.component';

@NgModule({
  declarations: [
    CaTableComponent,
    FilterComponent,
    CheckImportsTableComponent,
    LoginComponent,
    MenuComponent,
    SimpleTableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CdkTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ResizableModule,
    MatMenuModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CaTableComponent,
    FilterComponent,
    CheckImportsTableComponent,
    LoginComponent,
    MenuComponent,
    SimpleTableComponent,
  ],
})
export class SharedModule {}
