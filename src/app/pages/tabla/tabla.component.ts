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
  
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
}

export interface Usuarios {
  usuario: string;
  nombre: string;
  rol: string;
  certificado: string;
}

const DATOS: Usuarios[] = [
  {usuario: 'user1', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user2', nombre: 'pedrito', rol: 'admin', certificado: 'si'},
  {usuario: 'user3', nombre: 'rodrigo', rol: 'admin', certificado: 'si'},
  {usuario: 'user4', nombre: 'marquitos', rol: 'admin', certificado: 'si'},
  {usuario: 'user5', nombre: 'pepito', rol: 'admin', certificado: 'si'},
  {usuario: 'user6', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user7', nombre: 'juanito', rol: 'admin', certificado: 'si'},
  {usuario: 'user8', nombre: 'juanito', rol: 'admin', certificado: 'si'},

];