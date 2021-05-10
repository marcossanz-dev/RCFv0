import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() isClean = true;

  @Output() emitter = new EventEmitter();
  @Output() clean = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
