import {AfterViewInit, Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements AfterViewInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'rol', 'certificado'];
  dataSource = new MatTableDataSource<Usuarios>(DATOS);


  ngAfterViewInit() {
  }
}

export interface Usuarios {
  usuario: string;
  nombre: string;
  rol: string;
  certificado: string;
}

const DATOS: Usuarios[] = [
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user', nombre: 'juanito', rol: 'admin', certificado: 'si'},

];