import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../modal/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() studentArray!: Istudent[];
  constructor() { }

  ngOnInit(): void {
  }

}
