import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CabeceraComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
