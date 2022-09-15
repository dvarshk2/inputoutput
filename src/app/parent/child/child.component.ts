import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input()  msgFromParent!:string;
msgFromChild:string = 'Doing well here, Enjoying work';
@Output() childOut : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddBtn(){
    this.childOut.emit(this.msgFromChild);
  }
}
