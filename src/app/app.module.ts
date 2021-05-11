import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { MatRadioModule } from '@angular/material/radio';

import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CheckImportsTableComponent } from './pages/check-imports-table/check-imports-table.component';

import { ResizableModule } from 'angular-resizable-element';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import {
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckImportsTableComponent,
    MenuComponent,
    SimpleTableComponent,
    FilterComponent,
  ],
  imports: [
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
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
