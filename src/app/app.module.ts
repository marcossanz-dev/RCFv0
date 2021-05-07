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
import { HomeComponent } from './pages/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './pages/components/filter/filter.component';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    HomeComponent,
    FilterComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    ResizableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
