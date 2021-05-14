import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { MenuComponent } from './components/menu/menu.component';

import { SimpleTableComponent } from './components/simple-table/simple-table.component';

import { CheckImportsTableComponent } from './pages/check-imports-table/check-imports-table.component';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {
  MatFormFieldModule,

} from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { FooterComponent } from './pages/footer/footer.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckImportsTableComponent,
    MenuComponent,
    SimpleTableComponent,
    FooterComponent,
    CabeceraComponent,
    TablaComponent

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
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}