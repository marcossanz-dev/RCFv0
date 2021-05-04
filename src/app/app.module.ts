import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TableComponent } from './pages/components/table/table.component';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	ResizableModule
} from 'angular-resizable-element';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    ResizableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
