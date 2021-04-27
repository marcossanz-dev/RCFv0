import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckImportsTableComponent } from './pages/check-imports-table/check-imports-table.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, CheckImportsTableComponent],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
