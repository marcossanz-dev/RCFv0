import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Entity } from 'src/app/libs/entity.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent{

  constructor() { }

  /*
  onChange(el: any) {
    this.value = el.target.value;
    console.log(this.value);
  }*/

}
