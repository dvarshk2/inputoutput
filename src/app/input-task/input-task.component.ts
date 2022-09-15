import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit {
  inputText:string = '';
  iaDisabled:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onInputHandler(event : Event){
    let targetValue = (<HTMLInputElement>(event.target))?.value;
    console.log(targetValue);
    if(targetValue != ''){
      this.iaDisabled = false;
    }else{
      this.iaDisabled = true;
    }
  }
  clickHandler(){
    this.inputText='';
  }
}
