import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  msgForChild:string ='Work Hard';
  msgParent!:string;
  constructor() { }

  ngOnInit(): void {
  }
  msgForParent(e:string){
    this.msgParent = e;
  }
}
